export function scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
}