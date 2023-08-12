export default function CardType(str) {
  const CardTyp = [
    { start: '2', typ: 'Мир', classes: 'sn-mir' },
    { start: '4', typ: 'VISA', classes: 'sn-visa' },
    { start: '50', typ: 'Maestro', classes: 'sn-maestro' },
    { start: '56', typ: 'Maestro', classes: 'sn-maestro' },
    { start: '57', typ: 'Maestro', classes: 'sn-maestro' },
    { start: '58', typ: 'Maestro', classes: 'sn-maestro' },
    { start: '51', typ: 'MasterCard', classes: 'sn-mastercard' },
    { start: '52', typ: 'MasterCard', classes: 'sn-mastercard' },
    { start: '53', typ: 'MasterCard', classes: 'sn-mastercard' },
    { start: '54', typ: 'MasterCard', classes: 'sn-mastercard' },
    { start: '55', typ: 'MasterCard', classes: 'sn-mastercard' },
    { start: '62', typ: 'China UnionPay', classes: 'sn-unionpay' },
    { start: '63', typ: 'Maestro', classes: 'sn-maestro' },
    { start: '67', typ: 'Maestro', classes: 'sn-maestro' }
  ];

  const vals = CardTyp.filter((el) => {
    const x = str.startsWith(el.start);
    return x;
  });

  if (vals.length === 1) {
    return vals[0];
  }
  return undefined;
}
