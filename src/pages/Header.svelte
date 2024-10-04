<script lang="ts">
    import { scrollToSection } from '$lib/utils'
</script>

<div class='flex flex-col items-center justify-center h-screen'>
    <h1 class='text-9xl font-bold'>
        ParthenayEat
    </h1>
    <button class='btn mt-12 shadow-md shadow-red-950' on:click={() => scrollToSection('about')}>
        Qui sommes nous ?
    </button>
</div>