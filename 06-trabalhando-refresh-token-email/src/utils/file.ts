import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }

  fs.unlink(filename, (err) => {
    if (err) throw new Error();
  });
};
