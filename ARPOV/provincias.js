jQuery(function($) {
    

    $(window).load(function() {

      function obtentores(element) {
        jQuery(element).selectize({
            options: [
              { value: "Ciudad Autónoma de Buenos Aires", name: "Ciudad Autónoma de Buenos Aires" },
              { value: "Buenos Aires", name: "Buenos Aires" },
              { value: "Catamarca", name: "Catamarca" },
              { value: "Córdoba", name: "Córdoba" },
              { value: "Corrientes", name: "Corrientes" },
              { value: "Chaco", name: "Chaco" },
              { value: "Chubut", name: "Chubut" },
              { value: "Entre Ríos", name: "Entre Ríos" },
              { value: "Formosa", name: "Formosa" },
              { value: "Jujuy", name: "Jujuy" },
              { value: "La Pampa", name: "La Pampa" },
              { value: "La Rioja", name: "La Rioja" },
              { value: "Mendoza", name: "Mendoza" },
              { value: "Misiones", name: "Misiones" },
              { value: "Neuquén", name: "Neuquén" },
              { value: "Rio Negro", name: "Rio Negro" },
              { value: "Salta", name: "Salta" },
              { value: "San Juan", name: "San Juan" },
              { value: "San Luis", name: "San Luis" },
              { value: "Santa Cruz", name: "Santa Cruz" },
              { value: "Santa Fe", name: "Santa Fe" },
              { value: "Santiago del Estero", name: "Santiago del Estero" },
              { value: "Tierra del Fuego", name: "Tierra del Fuego" },
              { value: "Tucumán", name: "Tucumán" },   
              
              
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
