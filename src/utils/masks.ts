interface ICalIdade {
  nascimento?: Date;
}

export function getBirthday({ nascimento }: ICalIdade): any {
  if (!nascimento) {
    return '';
  }
  const birthday = +new Date(nascimento);
  const age = (Date.now() - birthday) / 31557600000;
  return Math.trunc(age);
}
