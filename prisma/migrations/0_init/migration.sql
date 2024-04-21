-- CreateTable
CREATE TABLE "acuite_ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "rationale_date" DATE,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "search_name" VARCHAR,
    "title" VARCHAR,

    CONSTRAINT "acuite_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ar_internal_metadata" (
    "key" VARCHAR NOT NULL,
    "value" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "ar_internal_metadata_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "bse_fg_trades" (
    "id" BIGSERIAL NOT NULL,
    "trade_date" DATE,
    "security_code" INTEGER,
    "security_name" VARCHAR,
    "open_price" DOUBLE PRECISION,
    "high_price" DOUBLE PRECISION,
    "low_price" DOUBLE PRECISION,
    "close_price" DOUBLE PRECISION,
    "traded_volume" DOUBLE PRECISION,
    "no_of_trades" INTEGER,
    "total_turnover" DOUBLE PRECISION,
    "isin" VARCHAR,
    "face_value" DOUBLE PRECISION,
    "coupon" DOUBLE PRECISION,
    "maturity_date" DATE,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "bse_fg_trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bse_icdw_trades" (
    "id" BIGSERIAL NOT NULL,
    "security_name" VARCHAR,
    "issuer_name" VARCHAR,
    "coupon" DOUBLE PRECISION,
    "maturity_date" DATE,
    "last_traded_price" DOUBLE PRECISION,
    "weighted_average_price" DOUBLE PRECISION,
    "weighted_average_yield" DOUBLE PRECISION,
    "total_turnover" DOUBLE PRECISION,
    "isin" VARCHAR,
    "face_value" DOUBLE PRECISION,
    "trade_date" DATE,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "bse_icdw_trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bse_scrip_maps" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "scrip_name" VARCHAR,
    "scrip_code" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "bse_scrip_maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bw_ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "rationale_date" DATE,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "title" VARCHAR,
    "search_name" VARCHAR,

    CONSTRAINT "bw_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "care_ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "care_id" VARCHAR,
    "care_name" VARCHAR,
    "rationale_date" DATE,
    "rationale_title" VARCHAR,
    "rationale_id" INTEGER,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,

    CONSTRAINT "care_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cashflows" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "payment_date" DATE,
    "principal" DOUBLE PRECISION,
    "interest" DOUBLE PRECISION,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "cashflows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cdsl_data" (
    "id" BIGSERIAL NOT NULL,
    "Isin" VARCHAR,
    "IssuerName" VARCHAR,
    "AddressoftheIssuer" VARCHAR,
    "IssuerFormerNames" VARCHAR,
    "Cin" VARCHAR,
    "lei" VARCHAR,
    "TypeofIssuer" VARCHAR,
    "NatureofIssuer" VARCHAR,
    "BusinessSector" VARCHAR,
    "GroupCompaniesDetails" VARCHAR,
    "CompaniesName" VARCHAR,
    "InstrumentType" VARCHAR,
    "InstrumentDescription" VARCHAR,
    "ISINShortDescription" VARCHAR,
    "Secured" VARCHAR,
    "Guarantee" VARCHAR,
    "ConvertibilityType" VARCHAR,
    "Seniority" VARCHAR,
    "TaxFree" VARCHAR,
    "Series" VARCHAR,
    "Tranche" VARCHAR,
    "FaceValue" DOUBLE PRECISION,
    "Tenure" VARCHAR,
    "Default" VARCHAR,
    "PutOption" VARCHAR,
    "PutOptionDates" VARCHAR,
    "CallOption" VARCHAR,
    "CallOptionDates" VARCHAR,
    "RatingStatus" VARCHAR,
    "Mode" VARCHAR,
    "OpeningDate" DATE,
    "ClosingDate" DATE,
    "ActualClosingDate" DATE,
    "Registrar" VARCHAR,
    "DebentureTrustee" VARCHAR,
    "allotment_date" DATE,
    "Debentures" VARCHAR,
    "TotalAllotement" DOUBLE PRECISION,
    "IssuePrice" DOUBLE PRECISION,
    "IssueSize" DOUBLE PRECISION,
    "GreenShoeOption" VARCHAR,
    "AmountRaised" DOUBLE PRECISION,
    "Object" VARCHAR,
    "CouponBasis" VARCHAR,
    "CouponRate" VARCHAR,
    "CouponType" VARCHAR,
    "DayCountConvention" VARCHAR,
    "InterestPayment" VARCHAR,
    "InterestPaymentStartDate" DATE,
    "InterestPaymentEndDate" DATE,
    "RedemptionType" VARCHAR,
    "redemption_date" DATE,
    "RedemptionPremiumDetails" VARCHAR,
    "TotalQuantityRedeemed" INTEGER,
    "TotalValueRedeemed" INTEGER,
    "NetQuantity" INTEGER,
    "MaturityType" VARCHAR,
    "RatingAgency" VARCHAR,
    "RatingValue" VARCHAR,
    "RatingOutlook" VARCHAR,
    "RatedDate" DATE,

    CONSTRAINT "cdsl_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cin_maps" (
    "id" BIGSERIAL NOT NULL,
    "old_cin" VARCHAR,
    "new_cin" VARCHAR,
    "latest" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "cin_maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "company_name" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "verified" VARCHAR,
    "verified_at" DATE,
    "rated" VARCHAR,
    "listed" VARCHAR,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "convertible_issuances" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "cin" VARCHAR,
    "description" VARCHAR,
    "secured" VARCHAR,
    "guarantee" VARCHAR,
    "convertibility" VARCHAR,
    "seniority" VARCHAR,
    "tax_free" VARCHAR,
    "face_value" DOUBLE PRECISION,
    "put_option" VARCHAR,
    "call_option" VARCHAR,
    "mode" VARCHAR,
    "allotment_date" DATE,
    "perpetual" VARCHAR,
    "total_allotment" DOUBLE PRECISION,
    "issue_price" DOUBLE PRECISION,
    "issue_size" DOUBLE PRECISION,
    "green_shoe_option" VARCHAR,
    "coupon_basis" VARCHAR,
    "coupon_rate" VARCHAR,
    "coupon_type" VARCHAR,
    "day_count_convention" VARCHAR,
    "interest_payment" VARCHAR,
    "interest_payment_start_date" DATE,
    "interest_payment_end_date" DATE,
    "redemption_type" VARCHAR,
    "redemption_date" DATE,
    "redemption_premium" VARCHAR,
    "rating_at_issuance" VARCHAR,
    "rating_agency_at_issuance" VARCHAR,
    "rated_date_at_issuance" DATE,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "depository" VARCHAR,

    CONSTRAINT "convertible_issuances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crisil_ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "company_name" VARCHAR,
    "rating_date" DATE,
    "heading" VARCHAR,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,
    "search_name" VARCHAR,

    CONSTRAINT "crisil_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "icra_ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "icra_id" INTEGER,
    "icra_name" VARCHAR,
    "rationale_date" DATE,
    "rationale_title" VARCHAR,
    "rationale_id" INTEGER,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,

    CONSTRAINT "icra_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "india_ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "india_ratings_id" VARCHAR,
    "india_ratings_name" VARCHAR,
    "rationale_date" DATE,
    "rationale_title" VARCHAR,
    "rationale_id" INTEGER,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,

    CONSTRAINT "india_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "infomerics_ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "agency_name" VARCHAR,
    "rationale_date" DATE,
    "rationale_title" VARCHAR,
    "instrument_amount" VARCHAR,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "infomerics_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "information_memorandums" (
    "id" BIGSERIAL NOT NULL,
    "Isin" VARCHAR,
    "Url" VARCHAR,

    CONSTRAINT "information_memorandums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issuances" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "cin" VARCHAR,
    "description" VARCHAR,
    "secured" VARCHAR,
    "guarantee" VARCHAR,
    "convertibility" VARCHAR,
    "seniority" VARCHAR,
    "tax_free" VARCHAR,
    "face_value" DOUBLE PRECISION,
    "put_option" VARCHAR,
    "call_option" VARCHAR,
    "mode" VARCHAR,
    "allotment_date" DATE,
    "perpetual" VARCHAR,
    "total_allotment" DOUBLE PRECISION,
    "issue_price" DOUBLE PRECISION,
    "issue_size" DOUBLE PRECISION,
    "green_shoe_option" VARCHAR,
    "coupon_basis" VARCHAR,
    "coupon_rate" VARCHAR,
    "coupon_type" VARCHAR,
    "day_count_convention" VARCHAR,
    "interest_payment" VARCHAR,
    "interest_payment_start_date" DATE,
    "interest_payment_end_date" DATE,
    "redemption_type" VARCHAR,
    "redemption_date" DATE,
    "redemption_premium" VARCHAR,
    "rating_at_issuance" VARCHAR,
    "rating_agency_at_issuance" VARCHAR,
    "rated_date_at_issuance" DATE,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,
    "depository" VARCHAR,
    "coupon" DOUBLE PRECISION,
    "day_count" VARCHAR,
    "payment_frequency" VARCHAR,

    CONSTRAINT "issuances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nsdl_data" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "instrument_title" VARCHAR,
    "secType" VARCHAR,
    "secTypeDesc" VARCHAR,
    "issuerName" VARCHAR,
    "formerNameOne" VARCHAR,
    "formerNameTwo" VARCHAR,
    "formerNameThree" VARCHAR,
    "issuerTypeNature" VARCHAR,
    "businessSector" VARCHAR,
    "cin" VARCHAR,
    "lei" VARCHAR,
    "macro" VARCHAR,
    "sector" VARCHAR,
    "industry" VARCHAR,
    "instrumentType" VARCHAR,
    "issuerDetails" VARCHAR,
    "basicIndusrty" VARCHAR,
    "instrumentDesc" VARCHAR,
    "faceValue" DOUBLE PRECISION,
    "issuePrice" DOUBLE PRECISION,
    "totalIssueSize" DOUBLE PRECISION,
    "amountRaised" DOUBLE PRECISION,
    "greenShoeOption" VARCHAR,
    "totalAllotmentQuantity" DOUBLE PRECISION,
    "allotment_date" DATE,
    "perpetualInNature" VARCHAR,
    "redemption_date" DATE,
    "tenureYears" INTEGER,
    "tenureMonths" INTEGER,
    "tenureDays" INTEGER,
    "category" VARCHAR,
    "modeOfIssue" VARCHAR,
    "series" VARCHAR,
    "trancheNumber" VARCHAR,
    "principalProtected" VARCHAR,
    "secured" VARCHAR,
    "natureOfInstrument" VARCHAR,
    "seniorityRepayment" VARCHAR,
    "securedDetails" VARCHAR,
    "taxFree" VARCHAR,
    "incomeTaxSection" VARCHAR,
    "infrastructureCategory" VARCHAR,
    "objectOfIssue" VARCHAR,
    "scheduledOpeningDate" DATE,
    "scheduledClosingDate" DATE,
    "actualClosingDate" DATE,
    "intrumentTypeOther" VARCHAR,
    "convertability" VARCHAR,
    "couponBasis" VARCHAR,
    "couponType" VARCHAR,
    "couponRate" VARCHAR,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "nsdl_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nse_docs" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "particulars" VARCHAR,
    "type" VARCHAR,
    "date" DATE,
    "file_url" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "nse_docs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nse_trades" (
    "id" BIGSERIAL NOT NULL,
    "trade_date" DATE,
    "isin" VARCHAR,
    "last_traded_price" DOUBLE PRECISION,
    "last_traded_value" DOUBLE PRECISION,
    "total_trade_value" DOUBLE PRECISION,
    "last_traded_yield" DOUBLE PRECISION,
    "weighted_average_price" DOUBLE PRECISION,
    "weighted_average_yield" DOUBLE PRECISION,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "nse_trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" BIGSERIAL NOT NULL,
    "cin" VARCHAR,
    "agency" VARCHAR,
    "search_string" VARCHAR,
    "rationale_date" DATE,
    "rationale_url" VARCHAR,
    "local_path" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "record_dates" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "record_date" DATE,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "record_dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schema_migrations" (
    "version" VARCHAR NOT NULL,

    CONSTRAINT "schema_migrations_pkey" PRIMARY KEY ("version")
);

-- CreateTable
CREATE TABLE "trades" (
    "id" BIGSERIAL NOT NULL,
    "isin" VARCHAR,
    "trade_date" DATE,
    "traded_value" DOUBLE PRECISION,
    "traded_price" DOUBLE PRECISION,
    "traded_volume" INTEGER,
    "exchange" VARCHAR,
    "segment" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trust_deeds" (
    "id" BIGSERIAL NOT NULL,
    "companyName" VARCHAR,
    "isin" VARCHAR,
    "allotmentDate" DATE,
    "MaturityDate" DATE,
    "Document" VARCHAR,

    CONSTRAINT "trust_deeds_pkey" PRIMARY KEY ("id")
);

