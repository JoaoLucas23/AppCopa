/*
  Warnings:

  - You are about to drop the `dados_jogador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "dados_jogador";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Dados_jogador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade_jogos" INTEGER NOT NULL,
    "gols_feitos" INTEGER NOT NULL,
    "cartoes_amarelos" INTEGER NOT NULL,
    "cartoes_vermelhos" INTEGER NOT NULL,
    "jogadorId" INTEGER NOT NULL,
    CONSTRAINT "Dados_jogador_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
