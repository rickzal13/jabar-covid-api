# API Wrapper data covid19 Jawa Barat (jawa barat)

jabar-covid-api adalah API Wrapper untuk mendapatkan data covid19 di jawa barat.
- source from : https://covid19-public.digitalservice.id/api/v1/sebaran_app/jabar

## Installation

- make .env file, example data with kecamatan cibinong
    - PORT=3000
    - URL=https://covid19-public.digitalservice.id/api/v1/sebaran_app/jabar?kode_kab=3201
    - KECAMATAN=CIBINONG
- npm install

## Usage
- API All Data
    /api/all?status=positif
- API Sum of Data
    /api/sum?status=positif&kelurahan=pabuaran
- API Group of Data
    /api/group?status=positif

## Status
    status kasus. Nilai yang tersedia: "ODP","PDP","OTG","Positif"
    more details visits https://covid19-public.digitalservice.id/api/v1/
