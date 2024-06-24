const teacherSet = new Set([
  process.env.NEXT_PUBLIC_NOAH,
  process.env.NEXT_PUBLIC_MARTINS,
  process.env.NEXT_PUBLIC_MARY,
  process.env.NEXT_PUBLIC_GEORGE,
  process.env.NEXT_PUBLIC_JOSIAH,
  process.env.NEXT_PUBLIC_TOLU,
  process.env.NEXT_PUBLIC_FEES,
  process.env.NEXT_PUBLIC_JEAN,
  process.env.NEXT_PUBLIC_SEGUN,
  process.env.NEXT_PUBLIC_EMMY,
  process.env.NEXT_PUBLIC_FAITHFUL,
  process.env.NEXT_PUBLIC_DEBORAH,
  process.env.NEXT_PUBLIC_VJW,
  process.env.NEXT_PUBLIC_LEMUEL,
  process.env.NEXT_PUBLIC_JERRY,
  process.env.NEXT_PUBLIC_PEACE,
  process.env.NEXT_PUBLIC_KEHINDE,
  process.env.NEXT_PUBLIC_NELSON,
  process.env.NEXT_PUBLIC_EMMANUEL,
  process.env.NEXT_PUBLIC_PRECIOUS_BABS,
  process.env.NEXT_PUBLIC_BLESSING,
  process.env.NEXT_PUBLIC_JOHN_KANU,
  process.env.NEXT_PUBLIC_FEMI
]);
export const isTeacher = (userId?: string | null | undefined) => {
  if (userId && typeof userId === 'string') {
    return userId.includes('facilitator');
  }
  return false;
};
