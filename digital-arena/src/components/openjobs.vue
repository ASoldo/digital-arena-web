<template>
  <div class="card sm:w-full lg:w-1/2 sm:p-0 sm:m-0 backdrop-blur-2xl md:shadow-xl">
    <div class="card-body">
      <h2 class="card-title justify-center mb-5">
        <span class="text-2xl hover:shadow-xl hover:shadow-blue-500/40 text-white">OPEN JOBS</span>
      </h2>
      <!-- <p> -->
      <!--   Za potrebe provedbe projekta komercijalizacije inovativnog proizvoda -->
      <!--   PVSmartClick, sa očekivanim datumom početka provedbe 01.07.2022. te u -->
      <!--   trajanju 24 mjeseca, tvrtka traži zaposlenike za sljedeća radna mjesta: -->
      <!--   Analitičar sustava – 1 zaposlenik Security administrator – 1 zaposlenik -->
      <!--   Tester (QA) – 1 zaposlenik DevOps inženjer – 1 zaposlenik Sistemski -->
      <!--   administrator – 2 zaposlenika Mjesto rada: Imotski / Split / Zagreb / na -->
      <!--   daljinu Vrsta radnog odnosa: rad na određeno za vrijeme trajanja -->
      <!--   projekta Rok prijave: 16.05.2022. Ako ste zainteresirani za neku od -->
      <!--   navedenih pozicija, udovoljavate navedenim uvjetima, proaktivni ste i -->
      <!--   želite raditi u poticajnom radnom okruženju u kojem možete primijeniti -->
      <!--   svoja znanja i iskustvo, javite nam se slanjem životopisa na e-mail -->
      <!--   info@digitalarena.hr do 16.05.2022. -->
      <!-- </p> -->
      <div class="card-actions justify-center">
        <div @click="collapseAll($event)" tabindex="0" class="collapse collapse-arrow bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-white">
            ANALITIČAR SUSTAVA
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              <span
                class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">Odgovornosti:</span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                Analiza i razjašnjavanje korisničkih zahtjeva. Izrada
                funkcijskih specifikacija za korisničke zahtjeve. Definiranje i
                provedba funkcionalnih testova Izrada korisničke dokumentacije.
                Rad na aktivnostima unapređenja poslovanja isoka razina
                odgovornosti, prilagodljivost i samostalnost u radu,
                komunikativnost i sposobnost za konstruktivan timski rad.
                Praćenje zakonskih, poslovnih i tehnoloških trendova te
                predlaganje unapređenja.<br />
              </span>
              <br />
              <span class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">
                Uvjeti:
              </span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                VSS/VŠS informatičko, tehničko ili slično usmjerenje uz
                relevantno poslovno iskustvo Profesionalno služenje engleskim
                jezikom. Poznavanje metodologija upravljanja poslovnim
                procesima, upravljanja zahtjevima i testiranjem aplikativnog
                softvera Poznavanje principa i rada s relacijskim bazama
                podataka i osnova SQL jezika. Komunikacijske i prezentacijske
                vještine. Iznimno dobro znanje engleskog jezika u govoru i pismu
              </span>
            <div class="card-actions justify-end">
              <div class="badge badge-outline text-white">11.04.2022</div>
            </div>
            </p>
          </div>
        </div>
      </div>

      <div class="card-actions justify-center">
        <div @click="collapseAll($event)" tabindex="0" class="collapse collapse-arrow bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-white">
            SECURITY ADMINISTRATOR
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              <span
                class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">Odgovornosti:</span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                Administracija i rješavanje sigurnosnih prijetnji. Osiguranje
                sigurnosti sustava, zaštite od neovlaštenog pristupa te izmjene
                ili uništenja. Skeniranje i procjena ranjivosti sustava.
                Implementacija sigurnosnih standarda. Implementacija kontrola za
                upravljanje i ublažavanje rizika. Razvoj automatiziranih
                mogućnosti izvješćivanja o mjernim podacima. <br />
              </span>
              <br />
              <span class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">
                Uvjeti:
              </span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                VSS/VŠS informatičko, tehničko ili slično usmjerenje uz
                relevantno poslovno iskustvo. Odgovornost za pravilno
                upravljanje zadacima uključujući dokumentaciju, pravilno
                zatvaranje uključujući analizu uzroka, profiliranje incidenta,
                označavanje i odgovarajuću eskalaciju. Rad na rješavanju izazova
                u svojoj domeni. Timski si igrač i voliš surađivati s drugima.
                Iznimno dobro znanje engleskog jezika u govoru i pismu
              </span>
            <div class="card-actions justify-end">
              <div class="badge badge-outline text-white">11.04.2022</div>
            </div>
            </p>
          </div>
        </div>
      </div>

      <div class="card-actions justify-center">
        <div @click="collapseAll($event)" tabindex="0" class="collapse collapse-arrow bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-white">
            TESTER (QA)
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-white">
            <p>
              <span
                class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">Odgovornosti:</span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                Priprema, održavanje i izvođenje test case-ova u svim fazama
                projekta. Suradnja s voditeljima projekata i developerima.
                Osiguravanje da sve nove funkcionalnosti ispravno funkcioniraju.
                Provođenje manualnog i automatskog testiranja. Izrada testnih
                planova i skripti te priprema test case-ove na bazi poslovnih
                zahtjeva Samoinicijativno iznošenje prijedloga unapređenja
                funkcionalnosti. Pronalaženje bugova i pisanje bug-reporta.
                Dokumentiranje test aktivnosti. <br />
              </span>
              <br />
              <span
                class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">Uvjeti:</span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40">
                VSS, društveno, informatičko ili tehničko usmjerenje uz
                relevantno poslovno iskustvo. Izrazite komunikacijske vještine.
                Sposobnost jasnog i sažetog pisanog izražavanja. Odgovornost u
                obavljanju posla te samostalnost i inicijativa u radu. Znanje
                engleskog jezika u govoru i pismu.
              </span>
            <div class="card-actions justify-end">
              <div class="badge badge-outline text-white">11.04.2022</div>
            </div>
            </p>
          </div>
        </div>
      </div>

      <div class="card-actions justify-center">
        <div @click="collapseAll($event)" tabindex="0" class="collapse collapse-arrow  bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-white">
            DEVOPS INŽENJER
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              <span
                class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">Odgovornosti:</span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                Izgradnja alata koji će onemogućiti ponavljanje grešaka i
                poboljšati korisničko iskustvo rješenja. Istraživanje i
                rješavanje tehničkih problema. Razvoj skripti i dashboarda,
                vizualizacija procesa. Izrada procedura za pronalazak sistemskih
                grešaka i daljnja održavanja. <br />
              </span>
              <br />
              <span
                class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">Uvjeti:</span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                VSS/VŠS informatičko, tehničko ili slično usmjerenje uz
                relevantno poslovno iskustvo. Iskustvo kao DevOps inženjer, SRE
                ili slično software engineering iskustvo. Osnovna znanja
                Unix/Linuxa. Rad na rješavanju izazova u svojoj domeni. Timski
                si igrač i voliš surađivati s drugima. Iznimno dobro znanje
                engleskog jezika u govoru i pismu.
              </span>
            <div class="card-actions justify-end">
              <div class="badge badge-outline text-white">11.04.2022</div>
            </div>
            </p>
          </div>
        </div>
      </div>

      <div class="card-actions justify-center">
        <div @click="collapseAll($event)" tabindex="0" class="collapse collapse-arrow  bg-base-100 rounded-box">
          <input type="checkbox" class="peer" />
          <div
            class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-white">
            SISTEMSKI ADMINISTRATOR
          </div>
          <div
            class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <p>
              <span
                class="bg-violet-900 rounded-md hover:shadow-xl hover:shadow-blue-500/40 px-1 text-white">Odgovornosti:</span>
              <span class="rounded-md hover:shadow-xl hover:shadow-blue-500/40 text-white">
                Rad u Windows/Linux server okruženju i sustavima virtualizacije.
                Konfiguracija i administriranje računalnih mreža i sustava.
                Uvjeti: VSS/VŠS informatičko, tehničko ili slično usmjerenje uz
                relevantno poslovno iskustvo. Iskustvo rada u Linux okruženju.
                Poznavanje mrežnih tehnologija. Znanje administriranja servera u
                Windows/Linux okruženju. <br />
              </span>
            <div class="card-actions justify-end">
              <div class="badge badge-outline text-white">11.04.2022</div>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const inputs: any = ref(document.getElementsByTagName("input"));
const collapseAll = (eventz: any) => {
  for (let i = 0; i < inputs.value.length; i++) {
    if (inputs.value[i] !== eventz.target) {
      inputs.value[i].checked = false;
    }
  }
  eventz.target.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  window.scrollTo(0, -100);
};
</script>
