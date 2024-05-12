-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6),
    "cin" VARCHAR(255),
    "name" VARCHAR(255),
    "verified" BOOLEAN,
    "verifiedAt" TIMESTAMP(6),
    "rated" BOOLEAN,
    "listed" BOOLEAN,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

