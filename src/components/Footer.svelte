<script>
    import { InstagramIcon, TwitterIcon } from 'svelte-feather-icons'
</script>

<footer class="footer bg-neutral text-neutral-content items-center p-4">
    <aside class="grid-flow-col items-center">
        <p>ParthenayEat © {new Date().getFullYear()} - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://instagram.com/">
            <InstagramIcon />
        </a>
        <a href="https://x.com/">
            <TwitterIcon />
        </a>
    </nav>
</footer>