-- CreateTable
CREATE TABLE "evento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT,
    "categoriaId" INTEGER NOT NULL,
    "localId" INTEGER NOT NULL,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "local" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT,

    CONSTRAINT "local_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoria_nome_key" ON "categoria"("nome");

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_localId_fkey" FOREIGN KEY ("localId") REFERENCES "local"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
