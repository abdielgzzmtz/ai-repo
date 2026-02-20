import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";

export async function extractTextFromPDF(filePath: string) {
  // construye ruta absoluta
  const absolutePath = path.join(process.cwd(), filePath);

  // lee el archivo como buffer
  const buffer = fs.readFileSync(absolutePath);

  // instancia el parser con el buffer
  const parser = new PDFParse({ data: buffer });

  // obtiene texto
  const result = await parser.getText();

  // opcional: liberar recursos
  await parser.destroy();

  return result.text;
}