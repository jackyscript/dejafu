<script setup>
import ExperienceItem from './items/ExperienceItem.vue'
</script>

<template>
  <ExperienceItem>
    <template #company>
      SRP ‑ Systementwicklung für Raumbezogene Planung GmbH (fmly Gesellschaft für Stadt‑ und
      Regionalplanung mbH)
    </template>
    <template #location>Berlin</template>
    <template #position> Software Developer </template>
    <template #date>since Oct. 2016</template>
    <ul tabindex="0">
      <li>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet.
      </li>
      <li>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
        illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
        ut laoreet dolore magna aliquam erat volutpat.
      </li>
      <li>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
        ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
        vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
        duis dolore te feugait nulla facilisi.
      </li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>SRP ‑ Gesellschaft für Stadt‑ und Regionalplanung mbH </template>
    <template #location>Berlin</template>
    <template #position> Working Student Application Development </template>
    <template #date>Sep. 2016 ‑ Oct. 2016</template>
    <ul tabindex="0">
      <li>
        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
        mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
        wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        aliquip ex ea commodo consequat.
      </li>
      <li>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
        illum dolore eu feugiat nulla facilisis.
      </li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>GoLocal GmbH & Co. KG</template>
    <template #location>Munich</template>
    <template #position> Working Student Test Automation </template>
    <template #date>Aug. 2015 ‑ Dec. 2015</template>
    <ul tabindex="0">
      <li>
        Designed and developed automatic UI tests for the main product of the company and set up a
        test suite using the selenium framework.
      </li>
      <li>
        Worked on knowledge transfer for team members, presented a comparison of two side by side
        placed video recordings of tests done manually and automatically by the test suite in the
        final project review, showcasing the latter tests are reducing test time, consistent in
        their execution and more complete.
      </li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company>Chair of Geoinformatics, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Java Programming </template>
    <template #date>Apr. 2015 ‑ Aug. 2015</template>
    <ul tabindex="0">
      <li>
        Taught students programming using the Java language in the following topics: Implement
        linked lists, B‑trees, heaps and the Dijkstra algorithm, develop a chat program using
        sockets and process XML files using the JDOM library.
      </li>
      <li>Assisted and mentored the students in tutorials.</li>
    </ul>
  </ExperienceItem>

  <ExperienceItem>
    <template #company
      >Institute of Astronomical and Physical Geodesy, Technical University of Munich</template
    >
    <template #location>Munich</template>
    <template #position> Tutor Global Geodetic Observation System and GNSS </template>
    <template #date>Nov. 2013 ‑ Mar. 2015</template>
    <ul tabindex="0">
      <li>
        Created and conducted practical tutorial lessons: Computing and modeling GRACE satellite
        data using the example of ice mass changes of greenland using MATLAB and Python/NumPy.
      </li>
      <li>Revised tutorial assignments, provided feedback to students and lecturers.</li>
    </ul>
  </ExperienceItem>
  <ExperienceItem>
    <template #company>Chair of Remote Sensing Technology, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Image Understanding </template>
    <template #date>Oct. 2014 ‑ Mar 2015</template>
    <ul tabindex="0">
      <li>
        Conducted practical tutorial lessons in addition to the lectures, provided introductory
        lessons for students about algorithms for feature detection in orthoimagery using
        HALCON/HDevelop.
      </li>
      <li>Revised tutorial assignments, provided feedback to students and lecturers.</li>
    </ul>
  </ExperienceItem>
  <ExperienceItem>
    <template #company>Chair of Geoinformatics, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Research Assistant </template>
    <template #date>Feb. 2014 ‑ Aug. 2014</template>
    <ul>
      <li>
        Participated on creating a process chain to convert a AutoCAD 3D model of the TUM to a
        IndoorGML format based one in the context of a thesis of a Ph.D student.
      </li>
      <li>Supported on preprocessing the AutoCAD 3D model to enable transformation to CityGML.</li>
    </ul>
  </ExperienceItem>
  <ExperienceItem>
    <template #company>Chair of Geoinformatics, Technical University of Munich</template>
    <template #location>Munich</template>
    <template #position> Tutor Geoinformatics </template>
    <template #date>Jun. 2013 ‑ Feb. 2014</template>
    <ul tabindex="0">
      <li>
        Created tutorial lessons for students to learn using ArcGIS for the topics of 3D modeling of
        a city model of Munich, visualization and interpolation of particulate matter data published
        by the UBA (Umweltbundesamt).
      </li>
      <li>Conducted the tutorial lessons, advised the students during their assignments.</li>
    </ul>
  </ExperienceItem>
</template>

<style scoped>
ul li {
  list-style: circle;
}

ul:focus {
  outline: var(--pico-outline-width) solid var(--pico-primary-focus);
  outline-offset: calc(var(--pico-spacing, 1rem) * 0.5);
}
</style>
