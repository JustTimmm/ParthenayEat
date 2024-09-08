<script lang="ts">
    import { scrollToSection } from '$lib/utils'
</script>

<div class='flex flex-col items-center justify-center h-screen'>
    <p class='text-6xl font-bold'>Woaw je suis t'as grand mère la t'as grand mèèèèèèèère</p>
    <div class="absolute bottom-0">
        <button class='btn mt-12' on:click={() => scrollToSection('header')}>Qui sommes nous ?</button>
    </div>
</div>