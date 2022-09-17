-- CreateTable
CREATE TABLE "Time" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "titulos" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "usuarioId" INTEGER,
    "partidaId" INTEGER,
    CONSTRAINT "Time_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Time_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Time_partidaId_fkey" FOREIGN KEY ("partidaId") REFERENCES "TimesPartida" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grupo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TimesPartida" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grupoId" INTEGER NOT NULL,
    CONSTRAINT "TimesPartida_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Partida" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fase" TEXT NOT NULL,
    "timesPartidaId" INTEGER NOT NULL,
    "timeId" INTEGER,
    CONSTRAINT "Partida_timesPartidaId_fkey" FOREIGN KEY ("timesPartidaId") REFERENCES "TimesPartida" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Partida_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "Time" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jogador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "posicao" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "paisId" INTEGER NOT NULL,
    CONSTRAINT "Jogador_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Time" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dados_Time" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "paisId" INTEGER NOT NULL,
    "quantidade_jogos" INTEGER NOT NULL,
    "gols_feitos" INTEGER NOT NULL,
    "gols_sofridos" INTEGER NOT NULL,
    "posicao_grupo" INTEGER NOT NULL,
    CONSTRAINT "Dados_Time_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Time" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "dados_jogador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade_jogos" INTEGER NOT NULL,
    "gols_feitos" INTEGER NOT NULL,
    "cartoes_amarelos" INTEGER NOT NULL,
    "cartoes_vermelhos" INTEGER NOT NULL,
    "jogadorId" INTEGER NOT NULL,
    CONSTRAINT "dados_jogador_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
