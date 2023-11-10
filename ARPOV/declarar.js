jQuery(function($) {
    

    $(window).load(function() {

      function obtentores(element) {
        jQuery(element).selectize({
            options: [
              { obtentores: 'ACEITERA GENERAL DEHEZA S.A.', value: "ACEITERA GENERAL DEHEZA S.A.: VERANO 23	SOJA", name: "VERANO 23	SOJA" },
              { obtentores: 'ACEITERA GENERAL DEHEZA S.A.', value: "ACEITERA GENERAL DEHEZA S.A.: VERANO 22	SOJA", name: "VERANO 22	SOJA" },
              { obtentores: 'ACOPIO AREQUITO SOCIEDAD ANONIMA', value: "ACOPIO AREQUITO SOCIEDAD ANONIMA: INVIERNO 23	CEBADA", name: "INVIERNO 23	CEBADA" },
              { obtentores: 'ACOPIO AREQUITO SOCIEDAD ANONIMA', value: "ACOPIO AREQUITO SOCIEDAD ANONIMA: INVIERNO 22	CEBADA", name: "INVIERNO 22	CEBADA" },
              { obtentores: 'AGRISEED SA', value: "ACOPIO AGRISEED SA: VERANO 23	SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'AGRISEED SA', value: "ACOPIO AGRISEED SA: VERANO 22	SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'AGRISEED SA', value: "ACOPIO AGRISEED SA: INVIERNO 23	TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'AGRISEED SA', value: "ACOPIO AGRISEED SA: INVIERNO 22	TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'ALBERTO L MARCHIONNI SA', value: "ACOPIO ALBERTO L MARCHIONNI SA: VERANO 23	SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'ARVES SEMILLAS', value: "ACOPIO ARVES SEMILLAS: INVIERNO 23 ARVEJA", name: "INVIERNO 23 ARVEJA" },
              { obtentores: 'ARVES SEMILLAS', value: "ACOPIO ARVES SEMILLAS: INVIERNO 22 ARVEJA", name: "INVIERNO 22 ARVEJA" },
              { obtentores: 'ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW', value: "ACOPIO ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW: INVIERNO 23 AVENA", name: "INVIERNO 23 AVENA" },
              { obtentores: 'ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW', value: "ACOPIO ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW', value: "ACOPIO ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW: INVIERNO 22 AVENA", name: "INVIERNO 22 AVENA" },
              { obtentores: 'ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW', value: "ACOPIO ASOCIACION COOPERADORA DE LA CHACRA EXPERIMENTAL DE BARROW: INVIERNO 22 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.', value: "ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.', value: "ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.', value: "ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.: INVIERNO 23 CEBADA", name: "INVIERNO 23 CEBADA" },
              { obtentores: 'ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.', value: "ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.', value: "ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.: INVIERNO 22 CEBADA", name: "INVIERNO 22 CEBADA" },
              { obtentores: 'ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.', value: "ASOCIACION DE COOPERATIVAS ARGENTINAS COOP. LTDA.: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'DON MARIO SEMILLAS', value: "DON MARIO SEMILLAS: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'DON MARIO SEMILLAS', value: "DON MARIO SEMILLAS: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'DON MARIO SEMILLAS', value: "DON MARIO SEMILLAS: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'DON MARIO SEMILLAS', value: "DON MARIO SEMILLAS: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'AZCUE - CASTRO AGRONOMIA S.R.L.', value: "AZCUE - CASTRO AGRONOMIA S.R.L.: INVIERNO 23 AVENA", name: "INVIERNO 23 AVENA" },
              { obtentores: 'AZCUE - CASTRO AGRONOMIA S.R.L.', value: "AZCUE - CASTRO AGRONOMIA S.R.L.: INVIERNO 22 AVENA", name: "INVIERNO 22 AVENA" },
              { obtentores: 'BASF ARGENTINA S.A.', value: "BASF ARGENTINA S.A.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'BASF ARGENTINA S.A.', value: "BASF ARGENTINA S.A.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'BIOCERES SEMILLAS SAU', value: "BIOCERES SEMILLAS SAU: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'BIOCERES SEMILLAS SAU', value: "BIOCERES SEMILLAS SAU: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'BIOCERES SEMILLAS SAU', value: "BIOCERES SEMILLAS SAU: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'BIOCERES SEMILLAS SAU', value: "BIOCERES SEMILLAS SAU: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'BIOSEMINIS S.A.', value: "BIOSEMINIS S.A.: INVIERNO 23 ARVEJA", name: "INVIERNO 23 ARVEJA" },
              { obtentores: 'BIOSEMINIS S.A.', value: "BIOSEMINIS S.A.: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'BIOSEMINIS S.A.', value: "BIOSEMINIS S.A.: INVIERNO 22 ARVEJA", name: "INVIERNO 22 ARVEJA" },
              { obtentores: 'BIOSEMINIS S.A.', value: "BIOSEMINIS S.A.: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'BRAMBILLA LAUREANO', value: "BRAMBILLA LAUREANO: INVIERNO 23 ARVEJA", name: "INVIERNO 23 ARVEJA" },
              { obtentores: 'BRAMBILLA LAUREANO', value: "BRAMBILLA LAUREANO: INVIERNO 22 ARVEJA", name: "INVIERNO 22 ARVEJA" },
              { obtentores: 'BUCK SEMILLAS S.A.', value: "BUCK SEMILLAS S.A.: INVIERNO 23 CEBADA", name: "INVIERNO 23 CEBADA" },
              { obtentores: 'BUCK SEMILLAS S.A.', value: "BUCK SEMILLAS S.A.: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'BUCK SEMILLAS S.A.', value: "BUCK SEMILLAS S.A.: INVIERNO 22 CEBADA", name: "INVIERNO 22 CEBADA" },
              { obtentores: 'BUCK SEMILLAS S.A.', value: "BUCK SEMILLAS S.A.: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'CERVECERIA Y MALTERIA QUILMES SAICA Y G', value: "CERVECERIA Y MALTERIA QUILMES SAICA Y G: INVIERNO 23 CEBADA", name: "INVIERNO 23 CEBADA" },
              { obtentores: 'CERVECERIA Y MALTERIA QUILMES SAICA Y G', value: "CERVECERIA Y MALTERIA QUILMES SAICA Y G: INVIERNO 22 CEBADA", name: "INVIERNO 22 CEBADA" },
              { obtentores: 'COPRA SOCIEDAD ANONIMA', value: "COPRA SOCIEDAD ANONIMA: VERANO 23 ARROZ", name: "VERANO 23 ARROZ" },
              { obtentores: 'COPRA SOCIEDAD ANONIMA', value: "COPRA SOCIEDAD ANONIMA: VERANO 22 ARROZ", name: "VERANO 22 ARROZ" },
              { obtentores: 'CORTEVA', value: "CORTEVA: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'CORTEVA', value: "CORTEVA: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'CRIADERO KLEIN S.A.', value: "CRIADERO KLEIN S.A.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'CRIADERO KLEIN S.A.', value: "CRIADERO KLEIN S.A.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'CRIADERO KLEIN S.A.', value: "CRIADERO KLEIN S.A.: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'CRIADERO KLEIN S.A.', value: "CRIADERO KLEIN S.A.: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'CRIADERO SANTA ROSA', value: "CRIADERO SANTA ROSA: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'CRIADERO SANTA ROSA', value: "CRIADERO SANTA ROSA: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'G Y T PLUS SA', value: "G Y T PLUS SA: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'G Y T PLUS SA', value: "G Y T PLUS SA: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'G Y T PLUS SA', value: "G Y T PLUS SA: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'G Y T PLUS SA', value: "G Y T PLUS SA: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'GENSUS S.A.', value: "GENSUS S.A.: INVIERNO 23 ALGODON", name: "INVIERNO 23 ALGODON" },
              { obtentores: 'GENSUS S.A.', value: "GENSUS S.A.: INVIERNO 22 ALGODON", name: "INVIERNO 22 ALGODON" },
              { obtentores: 'HZPC AMERICA LATINA S.A.', value: "HZPC AMERICA LATINA S.A.: VERANO 23 PAPA", name: "VERANO 23 PAPA" },
              { obtentores: 'HZPC AMERICA LATINA S.A.', value: "HZPC AMERICA LATINA S.A.: VERANO 22 PAPA", name: "VERANO 22 PAPA" },
              { obtentores: 'HZPC AMERICA LATINA S.A.', value: "HZPC AMERICA LATINA S.A.: INVIERNO 23 PAPA", name: "INVIERNO 23 PAPA" },
              { obtentores: 'HZPC AMERICA LATINA S.A.', value: "HZPC AMERICA LATINA S.A.: INVIERNO 22 PAPA", name: "INVIERNO 22 PAPA" },
              { obtentores: 'ILLINOIS SEMILLAS', value: "ILLINOIS SEMILLAS: VERANO 223 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'ILLINOIS SEMILLAS', value: "ILLINOIS SEMILLAS: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'ILLINOIS SEMILLAS', value: "ILLINOIS SEMILLAS: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'LDC SEMILLAS S.A.', value: "LDC SEMILLAS S.A.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'LDC SEMILLAS S.A.', value: "LDC SEMILLAS S.A.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'LDC SEMILLAS S.A.', value: "LDC SEMILLAS S.A.: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'LDC SEMILLAS S.A.', value: "LDC SEMILLAS S.A.: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'LOS GROBO AGROPECUARIA SA', value: "LOS GROBO AGROPECUARIA SA: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'LOS GROBO AGROPECUARIA SA', value: "LOS GROBO AGROPECUARIA SA: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'MONSANTO ARGENTINA SRL', value: "MONSANTO ARGENTINA SRL: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'MONSANTO ARGENTINA SRL', value: "MONSANTO ARGENTINA SRL: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'NIDERA SEMILLAS', value: "NIDERA SEMILLAS: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'NIDERA SEMILLAS', value: "NIDERA SEMILLAS: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'NIDERA SEMILLAS', value: "NIDERA SEMILLAS: INVIERNO 23 CEBADA", name: "INVIERNO 23 CEBADA" },
              { obtentores: 'NIDERA SEMILLAS', value: "NIDERA SEMILLAS: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'NIDERA SEMILLAS', value: "NIDERA SEMILLAS: INVIERNO 22 CEBADA", name: "INVIERNO 22 CEBADA" },
              { obtentores: 'NIDERA SEMILLAS', value: "NIDERA SEMILLAS: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'NUTRIEN AG SOLUTIONS ARGENTINA SA', value: "NUTRIEN AG SOLUTIONS ARGENTINA SA: VERANO 23 SOJA", name: " VERANO 23 SOJA" },
              { obtentores: 'NUTRIEN AG SOLUTIONS ARGENTINA SA', value: "NUTRIEN AG SOLUTIONS ARGENTINA SA: VERANO 22 SOJA", name: " VERANO 22 SOJA" },
              { obtentores: 'PILAGA S.A.', value: "PILAGA S.A.: VERANO 23 ARROZ", name: " VERANO 23 ARROZ" },
              { obtentores: 'PILAGA S.A.', value: "PILAGA S.A.: VERANO 22 ARROZ", name: " VERANO 22 ARROZ" },
              { obtentores: 'PIONEER ARGENTINA SRL', value: "PIONEER ARGENTINA SRL: VERANO 23 SOJA", name: " VERANO 23 SOJA" },
              { obtentores: 'PIONEER ARGENTINA SRL', value: "PIONEER ARGENTINA SRL: VERANO 22 SOJA", name: " VERANO 22 SOJA" },
              { obtentores: 'RAGT ARGENTINA S.A', value: "RAGT ARGENTINA S.A: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'RAGT ARGENTINA S.A', value: "RAGT ARGENTINA S.A: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'SEEDAR S.A.', value: "SEEDAR S.A.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'SEEDAR S.A.', value: "SEEDAR S.A.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'SEEDAR S.A.', value: "SEEDAR S.A.: INVIERNO 23 AVENA", name: "INVIERNO 23 AVENA" },
              { obtentores: 'SEEDCORP HO S.A.U.', value: "SEEDCORP HO S.A.U.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'SEEDCORP HO S.A.U.', value: "SEEDCORP HO S.A.U.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'SEEDCORP HO S.A.U.', value: "SEEDCORP HO S.A.U.: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'SEEDCORP HO S.A.U.', value: "SEEDCORP HO S.A.U.: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: INVIERNO 23 ARVEJA", name: "INVIERNO 23 ARVEJA" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: INVIERNO 23 CEBADA", name: "INVIERNO 23 CEBADA" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: INVIERNO 23 TRIGO", name: "INVIERNO 23 TRIGO" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: INVIERNO 22 ARVEJA", name: "INVIERNO 22 ARVEJA" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: INVIERNO 22 CEBADA", name: "INVIERNO 22 CEBADA" },
              { obtentores: 'SURSEM SOCIEDAD ANONIMA', value: "SURSEM SOCIEDAD ANONIMA: INVIERNO 22 TRIGO", name: "INVIERNO 22 TRIGO" },
              { obtentores: 'SYNGENTA AGRO', value: "SYNGENTA AGRO: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'SYNGENTA AGRO', value: "SYNGENTA AGRO: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'TOBIN S.R.L.', value: "TOBIN S.R.L.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'TOBIN S.R.L.', value: "TOBIN S.R.L.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              { obtentores: 'VETAGRO S.R.L. Y MARIA S.R.L. U.T.E.', value: "VETAGRO S.R.L. Y MARIA S.R.L. U.T.E.: VERANO 23 SOJA", name: "VERANO 23 SOJA" },
              { obtentores: 'VETAGRO S.R.L. Y MARIA S.R.L. U.T.E.', value: "VETAGRO S.R.L. Y MARIA S.R.L. U.T.E.: VERANO 22 SOJA", name: "VERANO 22 SOJA" },
              

              
              
              
              
              
              








































              
              
            
            
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
