jQuery(function($) {
    

    $(window).load(function() {

      function obtentores(element) {
        jQuery(element).selectize({
            options: [
              { obtentor: 'GENSUS', cultivo: "Algodon", variedad: "DP 1238 BGRR", value: "GENSUS: Algodon | DP 1238 BGRR" },
            ],
            optionGroupRegister: function (optgroup) {
              var capitalised = optgroup.charAt(0).toUpperCase() + optgroup.substring(1);
              var group = {
                label: 'Obtentor: ' + capitalised
              };

              group[this.settings.optgroupValueField] = optgroup;

              return group;
            },
            render: {
              item: function (item, escape) {
                  return (
                  "<div>" +
                  (item.variedad
                      ? '<span class="name">' + escape(item.variedad) + "</span>"
                      : "") +
                  "</div>"
                  );
              },
              option: function (item, escape) {
                  var label = item.variedad;
                  var caption = item.cultivo;
                  return (
                  "<div style='display: flex; justify-content: space-between; padding: 2px 4px'>" +
                  '<span class="label">' +
                  escape(label) +
                  "</span>" +
                  (caption
                      ? '<span class="caption">' + escape(caption) + "</span>"
                      : "") +
                  "</div>"
                  );
              },
            },
            placeholder: 'Click here to select ...',
            optgroupField: 'obtentor',
            labelField: 'variedad',
            searchField: ['variedad', 'obtentor', 'cultivo'],
            sortField: 'variedad'
          });
      }

      obtentores(jQuery('.wpcf7-field-group').find("[name^='obtentor']")[0])

      jQuery('form.wpcf7-form').on('DOMNodeInserted', '.wpcf7-field-group', function (ele) {

            console.log('added')
            
            obtentores(jQuery(ele.currentTarget).find("[name^='obtentor']")[0])
            
      });
       
    });
    

});


ALGODON
GENSUS
DP 1238 BGRR