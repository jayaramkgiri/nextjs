-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cin" VARCHAR(255),
    "name" VARCHAR(255),
    "verified" BOOLEAN,
    "verifiedAt" TIMESTAMP(6),
    "rated" BOOLEAN,
    "listed" BOOLEAN,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issuance" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isin" VARCHAR,
    "cin" VARCHAR,
    "description" VARCHAR,
    "secured" VARCHAR,
    "guarantee" VARCHAR,
    "convertibility" VARCHAR,
    "seniority" VARCHAR,
    "taxFree" VARCHAR,
    "faceValue" DOUBLE PRECISION,
    "putOption" VARCHAR,
    "callOption" VARCHAR,
    "mode" VARCHAR,
    "allotmentDate" DATE,
    "perpetual" VARCHAR,
    "totalAllotment" DOUBLE PRECISION,
    "issuePrice" DOUBLE PRECISION,
    "issueSize" DOUBLE PRECISION,
    "greenShoeOption" VARCHAR,
    "couponBasis" VARCHAR,
    "couponRate" VARCHAR,
    "couponType" VARCHAR,
    "dayCountConvention" VARCHAR,
    "interestPayment" VARCHAR,
    "interestPaymentStartDate" DATE,
    "interestPaymentEndDate" DATE,
    "redemptionType" VARCHAR,
    "redemptionDate" DATE,
    "redemptionPremium" VARCHAR,
    "ratingAtIssuance" VARCHAR,
    "ratingAgencyAtIssuance" VARCHAR,
    "ratedDateAtIssuance" DATE,
    "depository" VARCHAR,
    "coupon" DOUBLE PRECISION,
    "dayCount" VARCHAR,
    "paymentFrequency" VARCHAR,

    CONSTRAINT "issuances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BseOrderBook" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "seqNo" INTEGER NOT NULL,
    "isin" VARCHAR(255) NOT NULL,
    "scripName" VARCHAR(255) NOT NULL,
    "scripCode" VARCHAR(255) NOT NULL,
    "faceValue" DOUBLE PRECISION,
    "maturityDate" DATE,
    "creditRating" VARCHAR(255),
    "close" DOUBLE PRECISION,
    "open" DOUBLE PRECISION,
    "high" DOUBLE PRECISION,
    "low" DOUBLE PRECISION,
    "totalBuyQty" INTEGER,
    "totalSellQty" INTEGER,
    "buyPrice" DOUBLE PRECISION,
    "sellPrice" DOUBLE PRECISION,

    CONSTRAINT "BseOrderBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NseOrderBook" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "seqNo" INTEGER NOT NULL,
    "isin" VARCHAR(255) NOT NULL,
    "scripName" VARCHAR(255) NOT NULL,
    "faceValue" DOUBLE PRECISION,
    "maturityDate" DATE,
    "creditRating" VARCHAR(255),
    "close" DOUBLE PRECISION,
    "open" DOUBLE PRECISION,
    "high" DOUBLE PRECISION,
    "low" DOUBLE PRECISION,
    "totalBuyQty" INTEGER,
    "totalSellQty" INTEGER,
    "buyPrice" DOUBLE PRECISION,
    "sellPrice" DOUBLE PRECISION,

    CONSTRAINT "NseOrderBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderBook" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "exchange" VARCHAR(255) NOT NULL,
    "seqNo" INTEGER NOT NULL,
    "isin" VARCHAR(255) NOT NULL,
    "scripName" VARCHAR(255) NOT NULL,
    "scripCode" VARCHAR(255) NOT NULL,
    "faceValue" DOUBLE PRECISION,
    "maturityDate" DATE,
    "creditRating" VARCHAR(255),
    "close" DOUBLE PRECISION,
    "open" DOUBLE PRECISION,
    "high" DOUBLE PRECISION,
    "low" DOUBLE PRECISION,
    "totalBuyQty" INTEGER,
    "totalSellQty" INTEGER,
    "buyPrice" DOUBLE PRECISION,
    "sellPrice" DOUBLE PRECISION,

    CONSTRAINT "orderBook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_Company_Cin" ON "Company"("cin");

-- AddForeignKey
ALTER TABLE "Issuance" ADD CONSTRAINT "company_foreign_key" FOREIGN KEY ("cin") REFERENCES "Company"("cin") ON DELETE NO ACTION ON UPDATE NO ACTION;

