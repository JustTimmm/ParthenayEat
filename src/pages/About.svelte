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
            <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores dolorum amet. Delectus commodi vero
                <br>
                iste dignissimos, dolore porro natus officiis voluptatum ducimus aliquam error, cupiditate harum. Ullam, blanditiis deleniti.
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

    <button class='btn mt-12 shadow-md shadow-red-950 self-center mb-4' on:click={() => scrollToSection('how-work')}>
        <ArrowDownIcon />
    </button>
</div>