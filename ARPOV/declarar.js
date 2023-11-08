jQuery(function($) {
    

    $(window).load(function() {

      function obtentores(element) {
        jQuery(element).selectize({
            options: [
              { obtentores: 'ACEITERA GENERAL DEHEZA S.A.', value: "ACEITERA GENERAL DEHEZA S.A.: VERANO 23	SOJA", name: "VERANO 23	SOJA" },
              { obtentores: 'ACEITERA GENERAL DEHEZA S.A.', value: "ACEITERA GENERAL DEHEZA S.A.: VERANO 22	SOJA", name: "VERANO 22	SOJA" },
              { obtentores: 'ACOPIO AREQUITO SOCIEDAD ANONIMA', value: "ACOPIO AREQUITO SOCIEDAD ANONIMA: INVIERNO 23	CEBADA", name: "INVIERNO 23	CEBADA" },
              { obtentores: 'ACOPIO AREQUITO SOCIEDAD ANONIMA', value: "ACOPIO AREQUITO SOCIEDAD ANONIMA: INVIERNO 22	CEBADA", name: "INVIERNO 22	CEBADA" },
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
            optgroupField: 'obtentores',
            labelField: 'name',
            searchField: ['name', 'obtentores'],
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
