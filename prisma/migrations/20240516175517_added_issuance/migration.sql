/*
  Warnings:

  - You are about to drop the `Issuance` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable

CREATE TABLE "Issuance" (
    "id"  BIGSERIAL NOT NULL,
    "createdAt"  TIMESTAMP(6) NOT NULL,
    "updatedAt"  TIMESTAMP(6) NOT NULL,
    "isin"  VARCHAR,
    "cin"  VARCHAR,
    "description"  VARCHAR,
    "secured"  VARCHAR,
    "guarantee"  VARCHAR,
    "convertibility"  VARCHAR,
    "seniority"  VARCHAR,
    "taxFree"  VARCHAR,
    "faceValue"  DOUBLE PRECISION,
    "putOption"  VARCHAR,
    "callOption"  VARCHAR,
    "mode"  VARCHAR,
    "allotmentDate"  DATE,
    "perpetual"  VARCHAR,
    "totalAllotment"  DOUBLE PRECISION,
    "issuePrice"  DOUBLE PRECISION,
    "issueSize"  DOUBLE PRECISION,
    "greenShoeOption"  VARCHAR,
    "couponBasis"  VARCHAR,
    "couponRate"  VARCHAR,
    "couponType"  VARCHAR,
    "dayCountConvention"  VARCHAR,
    "interestPayment"  VARCHAR,
    "interestPaymentStartDate"  DATE,
    "interestPaymentEndDate"  DATE,
    "redemptionType"  VARCHAR,
    "redemptionDate"  DATE,
    "redemptionPremium"  VARCHAR,
    "ratingAtIssuance"  VARCHAR,
    "ratingAgencyAtIssuance"  VARCHAR,
    "ratedDateAtIssuance"  DATE,
    "depository"  VARCHAR,
    "coupon"  DOUBLE PRECISION,
    "dayCount"  VARCHAR,
    "paymentFrequency"  VARCHAR,

    CONSTRAINT "issuances_pkey" PRIMARY KEY ("id")
);

