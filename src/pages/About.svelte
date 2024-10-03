<script lang="ts">
    import { scrollToSection } from '$lib/utils'
    import { ArrowDownIcon } from 'svelte-feather-icons'
</script>

<div class="flex flex-col h-screen justify-between">
    <div class='flex h-full'>
        <div class="flex flex-col items-center justify-center w-1/2 h-full">
            <p class='text-6xl font-bold'>
                Que fait-on ?
            </p>
            <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br>
            </p>
        </div>

        <hr class="w-px h-1/2 border-l my-auto" style="border-left-color: #ffbfc6;">

        <div class='flex flex-col items-center justify-center w-1/2 h-full'>
            <p class='text-6xl font-bold'>
                Pourquoi le fait-on ?
            </p>
        </div>
    </div>

    <button class='btn mt-12 self-center mb-4' on:click={() => scrollToSection('header')}>
        <ArrowDownIcon />
    </button>
</div>