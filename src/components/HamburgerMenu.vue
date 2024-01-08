<template>
    <div>
        <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <LanguageSwitcher></LanguageSwitcher>
        </Menu>
    </div>
</template>

<script>
    import Menu from '../components/Menu.vue';
    import LanguageSwitcher from './LanguageSwitcher.vue';
    export default {
      name: 'HamburgerMenu',
      components: {
        Menu: Menu,
        LanguageSwitcher
      },
      methods: {
        openMenu() {
          this.$emit('openMenu');
        },
        closeMenu() {
          this.$emit('closeMenu');
        }
      }
    };
</script>