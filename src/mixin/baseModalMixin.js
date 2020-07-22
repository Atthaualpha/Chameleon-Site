import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("baseModal", ["modalState"]),
  },
  methods: {
    ...mapMutations("baseModal", ["openModal", "closeModal"]),
  },
};
