const DEFAULT_COUNTRY_SELECTED = 'vi'
const DEFAULT_SELECT2_LANGUAGE= 'ja'
function loadLanguageSwitcher() {
  var isoCountries = [
    {
      id: 'en-US',
      iconName: 'usa',
      text: 'English US'
    },
    {
      id: 'en-GB',
      iconName: 'uk',
      text: 'English',
    },
    {
      id: 'ja',
      iconName: 'japan',
      text: 'Japanese',

    },
    {
      id: 'vi',
      iconName: 'vietnam',
      text: 'Vietnamese',
    }
  ];

  function formatCountry(country) {
    if (!country.id) {
      return country.text;
    }
    var $country = $(
      '<span class="flag flag-' + country.iconName.toLowerCase() + '"></span>' +
      '<span class="text">' + country.text + "</span>"
    );
    return $country;
  };
  $('#language-switcher').select2({
    width: '100%',
    placeholder: 'Choose language',
    templateSelection: formatCountry,
    templateResult: formatCountry,
    data: isoCountries,
    selectOnClose: true,
    language:DEFAULT_SELECT2_LANGUAGE
  })
}
$(window).on("load", loadLanguageSwitcher);

$('#language-switcher').on("select2:select", function (e) {
  var select_val = $(e.currentTarget).val();
  console.log(select_val)
  $("html").attr("lang",select_val);
});