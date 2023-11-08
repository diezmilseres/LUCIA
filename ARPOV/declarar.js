jQuery(function($) {
    

    $(window).load(function() {

      function obtentores(element) {
        jQuery(element).selectize({
            options: [
              { manufacturer: 'nintendo', value: "nintendo: Nintendo Entertainment System", name: "Nintendo Entertainment System" },
              { manufacturer: 'nintendo', value: "snes", name: "Super Nintendo Entertainment System" },
              { manufacturer: 'nintendo', value: "n64", name: "Nintendo 64" },
              { manufacturer: 'nintendo', value: "gamecube", name: "GameCube" },
              { manufacturer: 'nintendo', value: "wii", name: "Wii" },
              { manufacturer: 'microsoft', value: 'xss', name: 'Xbox Series S' },
              { manufacturer: 'nintendo', value: "wiiu", name: "Wii U" },
              { manufacturer: 'nintendo', value: "switch", name: "Switch" },
              { manufacturer: 'sony', value: 'ps1', name: 'PlayStation' },
              { manufacturer: 'sony', value: 'ps2', name: 'PlayStation 2' },
              { manufacturer: 'sony', value: 'ps3', name: 'PlayStation 3' },
              { manufacturer: 'sony', value: 'ps4', name: 'PlayStation 4' },
              { manufacturer: 'sony', value: 'ps5', name: 'PlayStation 5' },
              { manufacturer: 'microsoft', value: 'xbox', name: 'Xbox' },
              { manufacturer: 'microsoft', value: '360', name: 'Xbox 360' },
              { manufacturer: 'microsoft', value: 'xbone', name: 'Xbox One' },
              { manufacturer: 'joaquin', value: 'xsx', name: 'Xbox Series X' }
            ],
            optionGroupRegister: function (optgroup) {
              var capitalised = optgroup.charAt(0).toUpperCase() + optgroup.substring(1);
              var group = {
                label: 'Obtentor: ' + capitalised
              };

              group[this.settings.optgroupValueField] = optgroup;

              return group;
            },
            placeholder: 'Click here to select ...',
            optgroupField: 'manufacturer',
            labelField: 'name',
            searchField: ['name', 'manufacturer'],
            sortField: 'name'
          });
      }

      obtentores(jQuery('.wpcf7-field-group').find("[name^='obtentor']")[0])

      jQuery('form.wpcf7-form').on('DOMNodeInserted', '.wpcf7-field-group', function (ele) {

            console.log('added')
            
            obtentores(jQuery(ele.currentTarget).find("[name^='obtentor']")[0])
            
      });
       
    });
    

});