document.addEventListener("DOMContentLoaded", function () {
  const phoneInputs = document.querySelectorAll(
    '.jet-form-builder__field[name="phone"]'
  );

  phoneInputs.forEach((input) => {
    const iti = window.intlTelInput(input, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
      preferredCountries: ["UK"], //set default country
      //find more options in the library documentation
      separateDialCode: true,
      formatOnDisplay: true,
      initialCountry: "auto",
      // geoIpLookup: function (callback) {

      //   callback("ES");
      // },
    });

    //validation customization
    const form = input.closest("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        if (!iti.isValidNumber()) {
          e.preventDefault();

          input.setCustomValidity(
            "Please, take a look to the phone number, we need a real phone number"
          );
        } else {
          input.setCustomValidity("");

          input.value = iti.getNumber();
        }
      });
    }

    input.addEventListener("input", function () {
      if (iti.isValidNumber()) {
        input.setCustomValidity("");
      }
    });
  });
});
