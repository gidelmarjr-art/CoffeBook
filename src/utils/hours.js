// Aberto agora? Horário de Brasília. Seg-Sex 07h30-20h00, Sáb-Dom 09h00-18h00 (fictício; igual a site.js).
export function isOpenNow(now = new Date()) {
  const d = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
  );
  const mins = d.getHours() * 60 + d.getMinutes();
  const weekend = d.getDay() === 0 || d.getDay() === 6;
  const open = weekend ? 9 * 60 : 7 * 60 + 30;
  const close = weekend ? 18 * 60 : 20 * 60;
  return mins >= open && mins < close;
}
