jQuery(function($) {
    

    $(window).load(function() {

      function obtentores(element) {
        jQuery(element).selectize({
            options: [
              { value: "CIUDAD AUTONOMA DE BUENOS AIRES", name: "CIUDAD AUTONOMA DE BUENOS AIRES" },
              { value: "BUENOS AIRES", name: "BUENOS AIRES" },
              { value: "CATAMARCA", name: "CATAMARCA" },
              { value: "CORDOBA", name: "CORDOBA" },
              { value: "CORRIENTES", name: "CORRIENTES" },
              { value: "CHACO", name: "CHACO" },
              { value: "CHUBUT", name: "CHUBUT" },
              { value: "ENTRE RIOS", name: "ENTRE RIOS" },
              { value: "FORMOSA", name: "FORMOSA" },
              { value: "JUJUY", name: "JUJUY" },
              { value: "LA PAMPA", name: "LA PAMPA" },
              { value: "LA RIOJA", name: "LA RIOJA" },
              { value: "MENDOZA", name: "MENDOZA" },
              { value: "MISIONES", name: "MISIONES" },
              { value: "NEUQUEN", name: "NEUQUEN" },
              { value: "RIO NEGRO", name: "RIO NEGRO" },
              { value: "SALTA", name: "SALTA" },
              { value: "SAN JUAN", name: "SAN JUAN" },
              { value: "SAN LUIS", name: "SAN LUIS" },
              { value: "SANTA CRUZ", name: "SANTA CRUZ" },
              { value: "SANTA FE", name: "SANTA FE" },
              { value: "SANTIAGO DEL ESTERO", name: "SANTIAGO DEL ESTERO" },
              { value: "TIERRA DEL FUEGO", name: "TIERRA DEL FUEGO" },
              { value: "TUCUMAN", name: "TUCUMAN" },   
              
              
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
