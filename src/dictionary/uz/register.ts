export const registerDictionary = {
  registryTitle: "Ro'yxatdan o'tish",
  registry: "Ro'yxatdan o'tish",
  name: 'Ismingiz',
  phoneOrEmail: 'Telefon raqam yoki elektron pochta',
  enterName: 'Ismingizni kiriting',
  password: 'Parol',
  enterPassword: 'Parolingizni kiriting',
  confirmPassword: 'Parolni tasdiqlash',
  warning: (supportHref: string) =>
    `Agarda siz O'zbekistondan tashqarida istiqomat qilib telefon raqam
    orqali ro'yxatdan o'tmoqchi bo'lsangiz,
      <a href='${supportHref}'>qo'llab-quvvatlash xizmati</a>
      orqali murojaat qilib telefon raqamni royxatdan o'tkazishingiz mumkin.`,
  enterGoogle: 'Google orqali',
  offer: (personalDataLink: string, termsOfUseLink: string) =>
    `Ro'yxatdan o'tish tugamasini bosish orqali siz
    <a href='${personalDataLink}'>Shaxsiy ma'lumotlarni</a>
    qayta ishlash va <a href='${termsOfUseLink}'>Foydalanish qoidalariga</a> rozilik bildirasiz`,
  registered: 'Ro‘yxatdan o‘tganmisiz?',
  loginToProfile: 'Profilga kirish',
  minName: "Ism kamida 3 harfdan iborat bo'lishi kerak",
  wrongFormatEmail: 'Elektron pochtada @ belgisi qatnashishi kerak',
  wrongFormatPhone: "Telefon raqami noto'g'ri formatda",
  notCompatiblePassword: 'Parollar mos kelmadi',
  passwordRequirement: "Parol 8 tadan 16 tagacha belgili va kamida 1 ta raqamga ega bo'lishi kerak",
  requiredName: 'Ismingizni kiriting',
  requiredPassword: 'Parolingizni kiriting',
  requiredPhone: 'Telefon raqamingizni kiriting',
}
