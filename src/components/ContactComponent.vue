<script setup>
import ContactItem from './items/ContactItem.vue'
</script>

<template>
  <p tabindex="0">
    Hello, my name is Jacky (pronouns "he/him"). I have a passion for reactive and functional programming and I care for a11y, UX and DX. I am a trained engineer (M. Sc.) in
    the field of geodesy and geospatial information. I am currently working as a software developer at <a href="https://www.and-effect.com/" target="_blank" rel="noopener">&effect</a> in Berlin.

  </p>
  <section>
    <article>
      <ul>
        <ContactItem id="address" value="Berlin">
          <template #icon>
            <img
              aria-hidden="true"
              class="logo"
              src="../assets/icons/pin.svg"
              alt="An address pin icon"
          /></template>
          <template #heading>Address</template>
        </ContactItem>

        <ContactItem id="phone" value="You can send me an email">
          <template #icon>
            <img
              aria-hidden="true"
              class="logo"
              src="../assets/icons/phone.svg"
              alt="A phone icon"
            />
          </template>
          <template #heading>Phone</template>
        </ContactItem>

        <ContactItem id="mail" value="dezhijacky.fu [ at ] gmail.com">
          <template #icon>
            <img aria-hidden="true" class="logo" src="../assets/icons/mail.svg" alt="A mail icon" />
          </template>
          <template #heading>E-Mail</template>
        </ContactItem>
        <ContactItem id="github">
          <template #icon>
            <img
              aria-hidden="true"
              class="logo"
              src="../assets/icons/github.svg"
              alt="The icon of github"
            />
          </template>
          <template #heading>Github</template>

          <template #link>
            <a href="https://github.com/jackyscript" target="_blank" rel="noopener"
              >Click here to see my github page</a
            ></template
          >
        </ContactItem>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.logo {
  width: 20px;
}

ul li {
  list-style: none;
}
</style>
