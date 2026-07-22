// Sistem trial FUN MATHS -- dikongsi oleh index.html dan buka-akses.html.
// Nota: skrin kunci pada setiap game SENGAJA tidak import fail ini -- ia baca
// localStorage terus secara synchronous (lihat blok <script> lepas
// window.FUNMATH_GAME_ID dalam setiap game berbayar) supaya tiada "kebocoran"
// skrin permainan sebelum semakan siap. Tukar UNLOCK_CODE di sini bila kod
// tersebar/bocor -- turut kemas kini rujukan kod dalam buka-akses.html (paparan
// placeholder sahaja, bukan logik).
window.FunMathTrial = (function () {
  var UNLOCK_STORAGE_KEY = 'funmath_full_access';
  var UNLOCK_CODE = 'FUNMATH2026';
  var FREE_GAMES = ['2048', 'algebraquest', 'fractionpizza', 'wheelofmath'];

  return {
    UNLOCK_CODE: UNLOCK_CODE,
    FREE_GAMES: FREE_GAMES,
    isFreeGame: function (id) {
      return FREE_GAMES.indexOf(id) !== -1;
    },
    isUnlocked: function () {
      try {
        return localStorage.getItem(UNLOCK_STORAGE_KEY) === 'true';
      } catch (e) {
        return false;
      }
    },
    unlock: function (code) {
      if (code && code.trim().toUpperCase() === UNLOCK_CODE) {
        try {
          localStorage.setItem(UNLOCK_STORAGE_KEY, 'true');
        } catch (e) {}
        return true;
      }
      return false;
    }
  };
})();
