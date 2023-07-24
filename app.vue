<style scoped>
  .icon {
    bottom: -1.25rem;
  }
</style>

<template>
  <main class="w-screen h-screen flex items-center justify-center bg-background">
    <section class="bg-cardBg p-10 rounded-lg relative">
      <span class="block text-center text-neon">ADVICE #{{ adivce?.slip.id }}</span>
      <p class="text-text text-2xl w-84 text-center my-8">"{{ adivce?.slip.advice }}"</p>
      <IconDevider class="w-full h-fit text text-text my-2" :fontControlled="false"/>
      <button @click="onClick" class="p-3 bg-neon absolute icon cursor-pointer rounded-full left-1/2 transform -translate-x-1/2 hover:shadow-neon hover:shadow-2xl transition-all">
        <IconButton/>
      </button>
    </section>
  </main>
</template>

<script setup lang="ts">
import IconDevider from '@/assets/icons/dividerd.svg'
import IconButton from '@/assets/icons/icon-dice.svg'

interface IAdvice {
  slip: {
    advice: string;
    id: number;
  }
}

const adivce = ref<IAdvice | null>(null);

const onClick = async() => {
  const resp: IAdvice = await $fetch('https://api.adviceslip.com/advice').then((res) => JSON.parse(res as string));
  adivce.value = resp;
}

onBeforeMount(() => {
  onClick();
})

</script>
1