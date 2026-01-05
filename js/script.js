/**
 * EFECTO DE NIEVE MEJORADO
 * Crea una atmósfera navideña dinámica en todas las ventanas.
 */
function createSnow() {
    const snowflake = document.createElement('div');
    
    // Variedad de formas de nieve
    const shapes = ['❄', '❅', '❆', '•'];
    snowflake.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    
    snowflake.classList.add('flake');
    
    // Posición inicial aleatoria
    const startLeft = Math.random() * 100;
    snowflake.style.left = startLeft + 'vw';
    
    // Tamaño aleatorio para crear profundidad (efecto 3D)
    const size = Math.random() * 1.5 + 0.5;
    snowflake.style.fontSize = size + 'rem';
    
    // Duración y opacidad aleatoria
    const duration = Math.random() * 3 + 4; // Entre 4 y 7 segundos
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.opacity = Math.random() * 0.8 + 0.2;
    
    // Color: principalmente blanco, pero algunos con un toque dorado
    if (Math.random() > 0.9) {
        snowflake.style.color = 'var(--dorado)';
    }

    document.body.appendChild(snowflake);
    
    // Limpieza automática del elemento después de que termine la animación
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Generar nieve cada 250ms (ajustable según rendimiento)
setInterval(createSnow, 250);

/**
 * MANEJO DEL VIDEO (SOLO SI EXISTE EN LA PÁGINA)
 * Esto evita errores en consola en las páginas de Galería o Contacto.
 */
document.addEventListener('DOMContentLoaded', () => {
    const videoBtn = document.querySelector('.video-placeholder');
    
    if (videoBtn) {
        videoBtn.addEventListener('click', function() {
            // Animación de click estilo cómic
            this.style.transform = "scale(0.95)";
            setTimeout(() => this.style.transform = "scale(1)", 100);
            
            // Acción
            alert("¡Iniciando la Experiencia Cinematográfica de Navidad 2025! 🎬");
        });
    }
    
    // Efecto extra: Log en consola para confirmar carga
    console.log("X-MAS 2025: Sistema de Magia Navideña activado 🎄");
});