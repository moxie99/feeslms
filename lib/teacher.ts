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
]);
export const isTeacher = (userId?: string | null | undefined) => {
  if (userId && typeof userId === 'string') {
    return teacherSet.has(userId);
  }
  return false;
};
