// JavaFest Past Events Archive — client-side filtering
// Speakers page: year filter + multi-year toggle
// Sessions page: year filter + debounced text search
// Both pages: URL params are read on load and updated on filter change

(function () {
  'use strict';

  // ── URL PARAM HELPERS ──────────────────────────────────────────────────────

  function getParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  function updateParams(params) {
    var url = new URL(window.location.href);
    Object.keys(params).forEach(function (key) {
      var val = params[key];
      if (val === null || val === undefined || val === '' || val === 'all' || val === 'false') {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, val);
      }
    });
    history.replaceState(null, '', url.toString());
  }

  // ── SPEAKERS PAGE ──────────────────────────────────────────────────────────
  var yearFilter = document.getElementById('speakerYearFilter');
  var multiYearToggle = document.getElementById('multiYearToggle');
  var speakersGrid = document.getElementById('speakersGrid');
  var speakerCount = document.getElementById('speakerResultCount');

  if (yearFilter && speakersGrid) {
    // Restore from URL on load
    var initYear = getParam('year') || 'all';
    var initMulti = getParam('multi') === 'true';

    yearFilter.value = initYear;
    if (multiYearToggle && initMulti) {
      multiYearToggle.dataset.active = 'true';
      multiYearToggle.setAttribute('aria-pressed', 'true');
      multiYearToggle.textContent = '🌟 Multi-Year Only';
    }

    function filterSpeakers() {
      var selectedYear = yearFilter.value;
      var multiYearOnly = multiYearToggle && multiYearToggle.dataset.active === 'true';
      var cards = speakersGrid.querySelectorAll('.speaker-card-wrapper');
      var visible = 0;

      cards.forEach(function (card) {
        var years = card.dataset.years ? card.dataset.years.split(',') : [];
        var isMulti = card.dataset.multiYear === 'true';
        var show = true;

        if (selectedYear !== 'all' && years.indexOf(selectedYear) === -1) {
          show = false;
        }
        if (multiYearOnly && !isMulti) {
          show = false;
        }

        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      if (speakerCount) {
        speakerCount.textContent = 'Showing ' + visible + ' speaker' + (visible !== 1 ? 's' : '');
      }

      updateParams({
        year: yearFilter.value,
        multi: multiYearToggle ? multiYearToggle.dataset.active : null
      });
    }

    yearFilter.addEventListener('change', filterSpeakers);

    if (multiYearToggle) {
      multiYearToggle.addEventListener('click', function () {
        var active = this.dataset.active === 'true';
        this.dataset.active = active ? 'false' : 'true';
        this.setAttribute('aria-pressed', active ? 'false' : 'true');
        this.textContent = active ? '🌟 Show Multi-Year Speakers' : '🌟 Multi-Year Only';
        filterSpeakers();
      });
    }

    // Apply on load if params were set
    if (initYear !== 'all' || initMulti) {
      filterSpeakers();
    }
  }

  // ── SESSIONS PAGE ──────────────────────────────────────────────────────────
  var sessionYearFilter = document.getElementById('sessionYearFilter');
  var sessionSpeakerFilter = document.getElementById('speakerFilter');
  var sessionSearch = document.getElementById('sessionSearch');
  var sessionsGrid = document.getElementById('sessionsGrid');
  var sessionCount = document.getElementById('sessionResultCount');

  if (sessionYearFilter && sessionsGrid) {
    // Restore from URL on load
    var initSessionYear = getParam('year') || 'all';
    var initSpeaker = getParam('speaker') || 'all';
    var initSearch = getParam('q') || '';

    sessionYearFilter.value = initSessionYear;
    if (sessionSpeakerFilter) {
      sessionSpeakerFilter.value = initSpeaker;
    }
    if (sessionSearch) {
      sessionSearch.value = initSearch;
    }

    var searchTimer;

    function filterSessions() {
      var selectedYear = sessionYearFilter.value;
      var selectedSpeaker = sessionSpeakerFilter ? sessionSpeakerFilter.value : 'all';
      var searchTerm = sessionSearch ? sessionSearch.value.toLowerCase().trim() : '';
      var cards = sessionsGrid.querySelectorAll('.session-card-wrapper');
      var visible = 0;

      cards.forEach(function (card) {
        var cardYear = card.dataset.year;
        var cardSpeakers = card.dataset.speakers ? card.dataset.speakers.split(',') : [];
        var searchText = card.dataset.searchText || '';
        var show = true;

        if (selectedYear !== 'all' && cardYear !== selectedYear) {
          show = false;
        }
        if (selectedSpeaker !== 'all' && cardSpeakers.indexOf(selectedSpeaker) === -1) {
          show = false;
        }
        if (searchTerm && searchText.indexOf(searchTerm) === -1) {
          show = false;
        }

        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      if (sessionCount) {
        sessionCount.textContent = 'Showing ' + visible + ' session' + (visible !== 1 ? 's' : '');
      }

      updateParams({
        year: sessionYearFilter.value,
        speaker: sessionSpeakerFilter ? sessionSpeakerFilter.value : null,
        q: sessionSearch ? sessionSearch.value.trim() : null
      });
    }

    sessionYearFilter.addEventListener('change', filterSessions);

    if (sessionSpeakerFilter) {
      sessionSpeakerFilter.addEventListener('change', filterSessions);
    }

    if (sessionSearch) {
      sessionSearch.addEventListener('input', function () {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(filterSessions, 300);
      });
    }

    // Apply on load if params were set
    if (initSessionYear !== 'all' || initSpeaker !== 'all' || initSearch) {
      filterSessions();
    }
  }
})();
