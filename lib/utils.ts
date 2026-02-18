export const cn = (...classes: Array<string | undefined | false>) => classes.filter(Boolean).join(' ');

export const whatsappLink = (number: string, message: string) => {
  const sanitized = number.replace(/[^\d]/g, '');
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
};
