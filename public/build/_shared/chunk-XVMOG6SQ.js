function t(r){return r>=1e9?`${r/1e9}b`:r>=1e6?`${r/1e6}m`:r>=1e3?`${r/1e3}k`:r}function e(r,n={}){return new Intl.NumberFormat("en-NG",n).format(r)}export{t as a,e as b};
