import { exec, type ExecException, type ExecOptions } from "node:child_process";

/**
 * Runs a command.
 *
 * @param command The command to run.
 * @param execOptions The options to pass to {@link exec}.
 * @returns A promise that resolves with the results of the command.
 */
export async function runCommmand(
    command: string,
    execOptions: (ExecOptions & { shell?: LooseAutocomplete<"cmd.exe" | "powershell.exe"> | undefined }) = {}
): Promise<{ err: ExecException | null; stdout: string; stderr: string }> {
    return new Promise((resolve: (value: { err: ExecException | null; stdout: string; stderr: string }) => void): void => {
        exec(command, execOptions, (err: ExecException | null, stdout: string, stderr: string): void => {
            resolve({ err, stdout, stderr });
        });
    });
}
