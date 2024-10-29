# jetformbuilder-country-phone-selector
integration of inTelIInput with jetformbuilder

# Installation
* Please make sure you're using jetformbuilder https://jetformbuilder.com
* Create form with a field with name and class *phone* (avoid using tel type)
* Insert the following code in your theme functions.php (this is about enqueue libs, our custom code and a filter for jetformbuilder)
```
function register_phone_field_assets() {
    wp_enqueue_style(
        'intl-tel-input-css',
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css'
    );
    
    wp_enqueue_script(
        'intl-tel-input-js',
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/intlTelInput.min.js', //use the version you want
        array('jquery'),
        null,
        true
    );
    wp_enqueue_script(
        'custom-phone-field',
        get_template_directory_uri() . '/js/custom-phone-field.js', //place the field from this repo where you want but you need to enqueue
        array('intl-tel-input-js'),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'register_phone_field_assets');

add_filter('jet-form-builder/form-handler/fields-data-after-check', function($data) {
    if (isset($data['phone'])) {
       
        $phone_field = $data['phone'];
        if (!empty($phone_field)) {
           
            $data['phone_full'] = $phone_field;
        }
    }
    return $data;
});
```

* Test!

