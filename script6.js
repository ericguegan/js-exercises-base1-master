// Mon code Javascript

  var Nombre1 = prompt('Entrez un nombre à virgule :');
  var Nombre2 = prompt('Entrez un autre nombre à virgule :');
  var NombreE = Math.round( Nombre1 );

  var Resultat = (Math.round( Nombre1 ) * Nombre2 );
  alert ( Resultat );
// Fonction division et affichage du reste
  function check() {
    var Divi =( Nombre1  / Nombre2 );
    var Reste = ( Nombre1 % Nombre2 );
    alert ("Le résultat de la division est :" + Divi);
alert ("Le reste de la division est :" + Reste );
  }
