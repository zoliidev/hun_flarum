const locale = {
  name: 'hu',
  weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
  weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
  weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
  weekdaysParseExact : true,
  months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
  monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
  monthsParseExact : true,
  weekStart: 1,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: '%s múlva',
    past: '%s',
    s: 'néhány másodperce',
    m: 'egy perce',
    mm: '%d perce',
    h: 'egy órája',
    hh: '%d órája',
    d: 'egy napja',
    dd: '%d napja',
    M: 'egy hónapja',
    MM: '%d hónapja',
    y: 'egy évvel',
    yy: '%d évvel'
  },
  ordinalParse: /\d{1,2}(ul|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? 'ul' : 'a');
  }
}

dayjs.locale(locale, null, false)
