import { AlertCircle, CheckCircle2, FileUp, LoaderCircle, Paperclip, X } from "lucide-react";
import { useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export type UploadState = "empty" | "selected" | "uploading" | "uploaded";

type UploadFieldProps = {
  label: string;
  hint: string;
  accept: string;
  multiple?: boolean;
  optional?: boolean;
  error?: string;
  files: File[];
  onFilesChange: (files: File[]) => void;
};

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function UploadField({
  label,
  hint,
  accept,
  multiple = false,
  optional = false,
  error,
  files,
  onFilesChange,
}: UploadFieldProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<UploadState>(files.length ? "selected" : "empty");
  const [progress, setProgress] = useState(0);

  function simulateUpload(next: File[]) {
    setState("uploading");
    setProgress(0);
    let value = 0;
    const timer = setInterval(() => {
      value += 25;
      setProgress(Math.min(value, 100));
      if (value >= 100) {
        clearInterval(timer);
        setState(next.length ? "uploaded" : "empty");
      }
    }, 180);
  }

  return (
    <div className="grid gap-2">
      <Label htmlFor={inputId}>
        {label}
        {optional ? <span className="ml-2 text-xs font-normal text-muted-foreground">(optional)</span> : null}
      </Label>
      <div
        className={`grid gap-3 border border-dashed p-4 ${error ? "border-destructive" : "border-input"}`}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={accept}
          multiple={multiple}
          className="sr-only"
          aria-invalid={Boolean(error)}
          aria-describedby={`${inputId}-hint`}
          onChange={(event) => {
            const next = Array.from(event.target.files ?? []);
            onFilesChange(next);
            if (next.length) simulateUpload(next);
            else setState("empty");
          }}
        />
        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" variant="outline" onClick={() => inputRef.current?.click()}>
            <FileUp aria-hidden="true" />
            {files.length ? "Change file" : "Choose file"}
          </Button>
          <p id={`${inputId}-hint`} className="text-xs text-muted-foreground">
            {hint}
          </p>
        </div>

        {state === "empty" && !files.length ? (
          <p className="text-xs text-muted-foreground">No file selected yet.</p>
        ) : null}

        {files.length ? (
          <ul className="grid gap-2">
            {files.map((file) => (
              <li
                key={`${file.name}-${file.size}`}
                className="flex items-center gap-3 border border-border bg-muted px-3 py-2 text-sm"
              >
                <Paperclip className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">{file.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{formatSize(file.size)}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => {
                    const next = files.filter((item) => item !== file);
                    onFilesChange(next);
                    setState(next.length ? "uploaded" : "empty");
                    if (inputRef.current && !next.length) inputRef.current.value = "";
                  }}
                >
                  <X aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
        ) : null}

        {state === "uploading" ? (
          <p className="flex items-center gap-2 text-xs font-semibold text-foreground" role="status">
            <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
            Uploading… {progress}%
          </p>
        ) : null}

        {state === "uploaded" && files.length ? (
          <p className="flex items-center gap-2 text-xs font-semibold text-success" role="status">
            <CheckCircle2 className="size-4" aria-hidden="true" />
            File ready to submit.
          </p>
        ) : null}
      </div>
      {error ? (
        <p className="flex items-center gap-2 text-xs font-semibold text-destructive">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}
