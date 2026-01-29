#!/bin/bash

# Download all Google Sheets CSV files
cd "$(dirname "$0")"

echo "Downloading CSV files from Google Sheets..."

# Section AS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYouiU_RLxxvyrSOBa_ZeI1C1HVdSS9YCT1EjoN4PHErLaLUxvBYQM-JAAYCqv3cJnJZC1is6fDsXH/pub?gid=1691084562&single=true&output=csv" -o "AS.csv" && echo "Downloaded AS.csv"

# Section BS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjMfocFAfePqUw7z81ZzSzPx9OQ66xQCbjSvLn1EtboFm_-jiD_5hc7DCmBhEnSdoJ95XXb0gGy6iG/pub?gid=1629584428&single=true&output=csv" -o "BS.csv" && echo "Downloaded BS.csv"

# Section CS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWcOETCDgeSN27-E_B3N-FiRylQxnv-wy7eHiIuk6cung2dlXHrF8dVSWXpMqMfuk4zwhZdi3yChL_/pub?gid=1149264307&single=true&output=csv" -o "CS.csv" && echo "Downloaded CS.csv"

# Section DS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvhhN5dz76qlD9zKclLyf1W26v4sz4jlZjokVSgEltQq-k2J-ZG76qMQr_upMl4zvlr-o10B5EQ4BW/pub?gid=2001263946&single=true&output=csv" -o "DS.csv" && echo "Downloaded DS.csv"

# Section ES
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlh9q9jQmQHm-APY7o_rqY8GTKuPxFJXCyiKe2AVZQ5vbEyxSeKxalmIvBsaKlNAkLitpIo60OENc4/pub?gid=1180809030&single=true&output=csv" -o "ES.csv" && echo "Downloaded ES.csv"

# Section FS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQC5r7SPVsI7bJ-km94b37YigrJc49ZAHHFTCxPo_wZ9NQvFzOFHwwrtMz26DOGPygFp1cCMntbZsHf/pub?gid=1400478287&single=true&output=csv" -o "FS.csv" && echo "Downloaded FS.csv"

# Section GS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCoAccPUThclMTQxBESdSBNy8YtZ18zH9JqbTj1gBkJDxTaAM2MWumBeq4ZPEEU9C2Qvug0h-zUFKY/pub?gid=860430188&single=true&output=csv" -o "GS.csv" && echo "Downloaded GS.csv"

# Section HS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTj2oxhiX-jHKcpVPfr-SPRf5lUoxxpASJu-R7eElZQRG67cS6_BYuO41kEEDmGSWI8rKkCtp_h5HHo/pub?gid=1247116601&single=true&output=csv" -o "HS.csv" && echo "Downloaded HS.csv"

# Section IS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRhqpbXgLt8zjhrSZiEu1Nyq8FouZ8KK0zEdX8S2qpCpRizF_oWQ3lcBshOTkwI2J7YxOtYNdEzFLfj/pub?gid=691815013&single=true&output=csv" -o "IS.csv" && echo "Downloaded IS.csv"

# Section JS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLuFxBnr0BOmPMouxO7wNwmHWnoiXgl9XdvC0vI6KpfnRGRA8mjDewyXa_6SD0kayThuTZLD-kCbjW/pub?gid=1914367870&single=true&output=csv" -o "JS.csv" && echo "Downloaded JS.csv"

# Section KS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTzcVxXhT-wDZKsQVy5rjUx-ko-D6hfmj0couBwfL2IZE_F8AGrNIrdwZGD0EQFYp4iNaWBVFUI_1u/pub?gid=102997822&single=true&output=csv" -o "KS.csv" && echo "Downloaded KS.csv"

# Section LS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTskG2PgzuIhnQVCSQXy4BYhKweYdqjuKzWCcHeOYfBDheZmLLk946R6WDt-_I1KUoqkKnBD_ZHgHvi/pub?gid=214557244&single=true&output=csv" -o "LS.csv" && echo "Downloaded LS.csv"

# Section YY
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOSJ5ebiSq4oLtvHKceSPf9WRxRDeDIzs8cGCm23AjLiq8LrTIUjocEX0RgioBr2leg7E5p_SWVJPH/pub?gid=1851413578&single=true&output=csv" -o "YY.csv" && echo "Downloaded YY.csv"

# Section MS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSMhnEHg7PSX6nfPttP3hsrEhxfiNvznSovLn5ea0OWJVh94YZ1BdNX41NSoLDjRxZVqJ-t5dLJhK3/pub?gid=210950559&single=true&output=csv" -o "MS.csv" && echo "Downloaded MS.csv"

# Section NS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHd_e6SuPm0aawwEn43XP0FlbMuJGEeht1M3gFKohkb5mpRzdYKHA0jJmlVToByEMtSL0fdRknrIys/pub?gid=1164052204&single=true&output=csv" -o "NS.csv" && echo "Downloaded NS.csv"

# Section PS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQE_4QOtqumIBBuml9d5tWKj6zsJNS3Wix1o-r7zL3PQD90u6xe7Z7pNiObdjc3ZNdl_G8sD-FnTp7c/pub?gid=1363690174&single=true&output=csv" -o "PS.csv" && echo "Downloaded PS.csv"

# Section QS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHtU8YSxTN7ztenVmIYTuHRVqISKIL-zdEYg2MmcTP-Zq1bJR2ScFsFNauK0-sM5KtfpNO_cXbdNqY/pub?gid=419575241&single=true&output=csv" -o "QS.csv" && echo "Downloaded QS.csv"

# Section RS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vS6Vck9690RSGnv6leCB7pO3y0mpXvt--HcJNciYA-LbAtQUYOqFkGk540LDn_-PeTXvYo5qz-HzScd/pub?gid=1566885558&single=true&output=csv" -o "RS.csv" && echo "Downloaded RS.csv"

# Section SS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSugDIffwGi5sH9C-NVKO4p2XXYbXZA1lFwUBJfHVtZM347ZPm-vTnaBSznPbs_JPA5BN6s4FoEaPym/pub?gid=1430252574&single=true&output=csv" -o "SS.csv" && echo "Downloaded SS.csv"

# Section TS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRtd2RswZgdwbSUPDTnSX3hUPvdoGF0YeOtZlDXDAwQ0mdbxzLtJEfEhhAZO4tK4UBvuJbl-pBYjW-3/pub?gid=1248154152&single=true&output=csv" -o "TS.csv" && echo "Downloaded TS.csv"

# Section US
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQQFNVQp_fvbL3gnkheGcigmF5Gc9oL7krdihWCVFvXw0-jYsZ8gIwle8cWbxuTG8UZ6qKepKr9uPgi/pub?gid=491541212&single=true&output=csv" -o "US.csv" && echo "Downloaded US.csv"

# Section VS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSttYBIqMfp3CdJeqpOC10b2VmiwnmwQNnXGsmRc38LasOsgMYSHBGMcKyuNhZXABWpiPdj1BJ5bnZ9/pub?gid=11231763&single=true&output=csv" -o "VS.csv" && echo "Downloaded VS.csv"

# Section WS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTqZkRQS8uRahs6N7WT6fUv0go9bHvOWC5jqVXVUuA-JakCpvdz65FAs015zYZjI7l5_LymXlvBcrTf/pub?gid=532260066&single=true&output=csv" -o "WS.csv" && echo "Downloaded WS.csv"

# Section XS
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcMHVGayhpB1OUAsLFpEJZpbfA4R3-3BcoZl50CVDpN7GBcfouXNAnFCOGAoarF8sov2g6l1o4sAtv/pub?gid=1901178241&single=true&output=csv" -o "XS.csv" && echo "Downloaded XS.csv"

# Section AA
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSxY5Imgr1If3BBE8k3LKds21Ir4dP9Qv0WKeYeNlJNSuVykg_KDbWbgIhntm_sHUnXQp477YhRwllq/pub?gid=1534029194&single=true&output=csv" -o "AA.csv" && echo "Downloaded AA.csv"

# Section BB
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkjrQtYK3UOwtXHfgnvmAhj_t8Fr-VWNH_lRk5eXPXiI8IJIxJb4suVBCPnOYa1GqMfrmU2uN1Ebg7/pub?gid=10459253&single=true&output=csv" -o "BB.csv" && echo "Downloaded BB.csv"

# Section CC
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRaY6M8I2YEVkc8yu6fwmHd-ZtlSSjrRpiL-a4NB4cO7dPGIuYYaR1vpC1RxW_cUmSZ491MQeIJFfOi/pub?gid=613112119&single=true&output=csv" -o "CC.csv" && echo "Downloaded CC.csv"

# Section DD
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_chrC1tTkuNYW1jZjMISNMo3R47M_xt4exGTWKWkS6NZ-mKEnYfJkerIOYDXDAEFz1vSc1OjL9Fz3/pub?gid=1852071035&single=true&output=csv" -o "DD.csv" && echo "Downloaded DD.csv"

# Section EE
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vR3AIVJ0SIqMfHtyCtPF9WykIDO9TRYMQVWDG6UqjcUVpeaBMpV5T64pEbW4diUQqQHpwgN5lgjiOhN/pub?gid=35687979&single=true&output=csv" -o "EE.csv" && echo "Downloaded EE.csv"

# Section FF
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSYxGFMq9QEWcwJNGZSe_uRXce188bAYGlj63qRB1SzSATnGWstt2Do4r-UkcwW71N60FxgpSMdwW5O/pub?gid=1036142330&single=true&output=csv" -o "FF.csv" && echo "Downloaded FF.csv"

# Section GG
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBZzPrBGoohiU5xfVot4-P5PD6y7Sgup2_7uHo8oma1mpmjiTGBA0W8KHy25IemPUnJ7q-1lILd5E_/pub?gid=559665279&single=true&output=csv" -o "GG.csv" && echo "Downloaded GG.csv"

# Section HH
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMRVGfC2B1UFDIHdnjB6T-RZdpjMA9WeyLAyqwlxWgLUQtNaPQLEcgqTOzQWkj2VZKvtX03fv1Fsj1/pub?gid=1977812898&single=true&output=csv" -o "HH.csv" && echo "Downloaded HH.csv"

# Section II
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNaCBA350d1cEGZPAq5tjqnomiESbMuelGhvEZH1bciIdtWgURjZE2UKCPWlRGMyf0h6YpngkNZUbj/pub?gid=1920744782&single=true&output=csv" -o "II.csv" && echo "Downloaded II.csv"

# Section JJ
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTKYmazOkkBPfX0JfwmsrkUghBxiXSR6SceHpPrUpfdQwukaiDXGNKAoGCVbbl0Qo18iD1usCm2Bf2C/pub?gid=934917233&single=true&output=csv" -o "JJ.csv" && echo "Downloaded JJ.csv"

# Section KK
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmL2MN2rQ7_wuyL82P9GZ6y8Jp_FNhS-sd-rJWjdxJDsbOARHFjzKTDf99F7Dl4uRb0EyDtmDNRad3/pub?gid=544373758&single=true&output=csv" -o "KK.csv" && echo "Downloaded KK.csv"

# Section LL
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRyx_YQBCAPWz34VinKXVQ3DUnZrC77hSa73gd4b2Va2R9LfIk5Yvn2sQHroOSSfn1no7oWzpz3AIGu/pub?gid=1125781368&single=true&output=csv" -o "LL.csv" && echo "Downloaded LL.csv"

# Section MM
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWk6PXoMBIYngpx-mwRatYk84UOLN5S0W5p3YF8FN_AYBZOxZ8_cPYu2Hyg2qDRkoBn9zRC-ocI_-3/pub?gid=319635090&single=true&output=csv" -o "MM.csv" && echo "Downloaded MM.csv"

# Section NN
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBGpBaA1uq4P_kOAF6dV39rTQJSAqJmLPCE0-gXWM8pIqzEPtffZjSmM9xCZGPr-cZJIxGNnNy2Q4t/pub?gid=2099389330&single=true&output=csv" -o "NN.csv" && echo "Downloaded NN.csv"

# Section OO
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTfmzNMeHq_JT3LH2Xu2uyNQBr2bxGBwjuZJR9Hd-5OEyg8O6MYCqE0dklJyXwbPmPYrYMHdHjTdjF/pub?gid=1780605946&single=true&output=csv" -o "OO.csv" && echo "Downloaded OO.csv"

# Section PP
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRKUOY0YXuLjHDZlXSl3GMr4c5KN_aUVQOkCqRKrMmGJxSQT9MCn8hCX2gL_rZhZj9GpGqYw_-mPCWL/pub?gid=1684330252&single=true&output=csv" -o "PP.csv" && echo "Downloaded PP.csv"

# Section QQ
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vTVc83wH36cOVJHTXjqK5wWFjRv8dU80_Fvv4jdXfBH-oBaZNH3K-FTt_x-Ff3h1w1tXk4jJ4JRfFqA/pub?gid=2027792568&single=true&output=csv" -o "QQ.csv" && echo "Downloaded QQ.csv"

# Section RR
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vRHXbSfMXy9hkF5dVIiTcHPaJXdZ9GVbFFQCYSTVDGMrXkKZBvhEI6m5E4jZCfGZ6r0SJ8DvC-o6c8X/pub?gid=1426254963&single=true&output=csv" -o "RR.csv" && echo "Downloaded RR.csv"

# Section TT
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4v87D9xxTWvXsB8DfOv_QMH7Xl4TBN8hKqQHMYiTJlCbNQyNWcPpvXaHu37u7bPvDBJBQxEL2aVeC/pub?gid=1193247979&single=true&output=csv" -o "TT.csv" && echo "Downloaded TT.csv"

# Section UU
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQVb5xFr3CrYPTpd4hSLqDCj7kEYT1ym4lLTwGQr9CXX5lJzCJKR1yf6F7VXw6z_mGYk9L4pmkDXVVo/pub?gid=168765636&single=true&output=csv" -o "UU.csv" && echo "Downloaded UU.csv"

# Section VV
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjDOjVCFxuCgKshH1WwXlJDVq1cxYqGxSxKS5ux9ZqE3aaRLjnJ9GUl-Mfq8L5vU8cYZaF1RpCWJuv/pub?gid=1929741696&single=true&output=csv" -o "VV.csv" && echo "Downloaded VV.csv"

# Section WW
curl -sL "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxuBwLcWrPz3m8mU9VEMFGQyU3PMr4qYIyPJ_N7bLc6CKJ8WoXdHBvPr0xYBa0z8ymkZp9pOQJvKYj/pub?gid=1814310949&single=true&output=csv" -o "WW.csv" && echo "Downloaded WW.csv"

echo ""
echo "Download complete! Files saved to tempdata/"
ls -la *.csv 2>/dev/null | wc -l | xargs -I {} echo "{} CSV files downloaded"
