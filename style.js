// Highlight current page link
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    function getFileNameFromPath(path) {
        const parts = path.split('/');
        let last = parts.pop() || parts.pop() || '';
        if (!last) return 'index.html';
        return last;
    }
    const currentFile = getFileNameFromPath(window.location.pathname);

    document.querySelectorAll('.navbar a').forEach(function(link) {
        const href = link.getAttribute('href');
        if (!href) return;

        if (/^(https?:|mailto:|#)/i.test(href)) {}

        try {
            const resolvedPath = new URL(href, window.location.href).pathname;
            const linkFile = getFileNameFromPath(resolvedPath);

            if (linkFile === currentFile) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        } catch (err) {}
    });
}
);

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://picsum.photos/id/10/400/300',
        'https://picsum.photos/id/20/400/300',
        'https://picsum.photos/id/30/400/300',
        'https://picsum.photos/id/40/400/300',
        'https://picsum.photos/id/50/400/300'
    ];
    const totalImages = images.length;

    const galleryImage = document.getElementById('galleryImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const imageCounter = document.getElementById('imageCounter');

    let currentIndex = 0;

    function updateGallery() {
        galleryImage.src = images[currentIndex];
        imageCounter.textContent = `Image ${currentIndex + 1} of ${totalImages}`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateGallery();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateGallery();
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    updateGallery();
});

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('mainTable');

    const btnWidth200 = document.getElementById('setWidth200');
    const btnWidth500 = document.getElementById('setWidth500');

    const btnBorder1 = document.getElementById('setBorder1');
    const btnBorder10 = document.getElementById('setBorder10');
    const btnBorder20 = document.getElementById('setBorder20');

    const colorButtons = document.querySelectorAll('.color-swatch');

    const btnReset = document.getElementById('resetButton');

    btnWidth200.addEventListener('click', () => {
        table.style.width = '200px';
    });

    btnWidth500.addEventListener('click', () => {
        table.style.width = '500px';
    });

    btnBorder1.addEventListener('click', () => {
        table.style.borderWidth = '1px';
        table.style.borderSpacing = '1px';
    });

    btnBorder10.addEventListener('click', () => {
        table.style.borderWidth = '10px';
        table.style.borderSpacing = '10px';
    });

    btnBorder20.addEventListener('click', () => {
        table.style.borderWidth = '20px';
        table.style.borderSpacing = '20px';
    });

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newColor = button.dataset.color;
            table.style.borderColor = newColor;
            const cells = table.querySelectorAll('td');
            cells.forEach(cell => {
                cell.style.backgroundColor = newColor;
            });
        });
    });

    btnReset.addEventListener('click', () => {
        table.style.width = null;
        table.style.borderWidth = null;
        table.style.borderSpacing = null;
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            cell.style.backgroundColor = null;
        });
    });
});
