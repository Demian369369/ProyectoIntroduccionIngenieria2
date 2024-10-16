
        const searchInput = document.getElementById('searchInput');
        const locationData = {
            'entradas': { map: 'images/entradas.jpg', real: 'images/Realentradas.jpg' },
            'entradasrevolucion': { map: 'images/entradasrevolucion.jpg', real: 'images/Realentradasrevolucion.jpg' },
            'entradasolimpica': { map: 'images/entradasOlimpica.jpg', real: 'images/RealentradasOlimpica.jpg' },
            'entradasboulevard': { map: 'images/entradasBoulevard.jpg', real: 'images/RealentradasBoulevard.jpg' },

            'edificio a': { map: 'images/edificioa.jpg', real: 'images/Realedificioa.jpg' },
            'edificio b': { map: 'images/edificiob.jpg', real: 'images/Realedificiob.jpg' },
            'edificio c': { map: 'images/edificioc.jpg', real: 'images/Realedificioc.jpg' },
            'edificio d': { map: 'images/edificiod.jpg', real: 'images/Realedificiod.jpg' },
            'biblioteca': { map: 'images/biblioteca.jpg', real: 'images/Realbiblioteca.jpg' },
            'Dentro de biblioteca': { map: 'images/bibliotecaD.jpg', real: 'images/RealbibliotecaD.jpg' },
            'cajero': { map: 'images/cajero.jpg', real: 'images/Realcajero.jpg' },
            'edificio e': { map: 'images/edificioe.jpg', real: 'images/Realedificioe.jpg' },
            'edificio f': { map: 'images/edificiof.jpg', real: 'images/Realedificiof.jpg' },
            'edificio h': { map: 'images/edificioh.jpg', real: 'images/Realedificioh.jpg' },
            'edificio i': { map: 'images/edificioi.jpg', real: 'images/Realedificioi.jpg' },
            'edificio j': { map: 'images/edificioj.jpg', real: 'images/Realedificioj.jpg' },
            'edificio k': { map: 'images/edificiok.jpg', real: 'images/Realedificiok.jpg' },
            'edificio g': { map: 'images/edificiog.jpg', real: 'images/Realedificiog.jpg' },
            'alfa beta': { map: 'images/edificioalfabeta.jpg', real: 'images/Realedificioalfabeta.jpg' },
            'edificio s': { map: 'images/edificios.jpg', real: 'images/Realedificios.jpg' },
            'edificio s2': { map: 'images/edificios2.jpg', real: 'images/Realedificios2.jpg' },
            'edificio m': { map: 'images/edificiom.jpg', real: 'images/Realedificiom.jpg' },
            'edificio n': { map: 'images/edificion.jpg', real: 'images/Realedificion.jpg' },
            'edificio o': { map: 'images/edificioo.jpg', real: 'images/Realedificioo.jpg' },
            'coordinacion': { map: 'images/cordinacion.jpg', real: 'images/Realcordinacion.jpg' },
            'edificio p': { map: 'images/edificiop.jpg', real: 'images/Realedificiop.jpg' },
            'edificio q': { map: 'images/edificioq.jpg', real: 'images/Realedificioq.jpg' },
            'edificio r': { map: 'images/edificior.jpg', real: 'images/Realedificior.jpg' },
            'edificio u': { map: 'images/edificiou.jpg', real: 'images/Realedificiou.jpg' },
            'edificio t': { map: 'images/edificiot.jpg', real: 'images/Realedificiot.jpg' },
            'edificio x': { map: 'images/edificiox.jpg', real: 'images/Realedificiox.jpg' },
            'comida x v': { map: 'images/comidaxv.jpg', real: 'images/Realcomidaxv.jpg' },
            'edificio v': { map: 'images/edificiov.jpg', real: 'images/Realedificiov.jpg' },
            'edificio v2': { map: 'images/edificiov2.jpg', real: 'images/Realedificiov2.jpg' },
            'edificio w': { map: 'images/edificiow.jpg', real: 'images/Realedificiow.jpg' },
            'edificio y': { map: 'images/edificioy.jpg', real: 'images/Realedificioy.jpg' },
            'lonaria': { map: 'images/lonaria.jpg', real: 'images/Reallonaria.jpg' },
            'jobs': { map: 'images/jobs.jpg', real: 'images/Realjobs.jpg' },
            'proulex': { map: 'images/proulex.jpg', real: 'images/Realproulex.jpg' },
            'auditorios': { map: 'images/auditorios.jpg', real: 'images/Realauditorios.jpg' },
            'medico': { map: 'images/medicos.jpg', real: 'images/Realmedicos.jpg' },
            'edificio z': { map: 'images/edificioz.jpg', real: 'images/Realedificioz.jpg' },
            'edificio z1': { map: 'images/edificioz1.jpg', real: 'images/Realedificioz1.jpg' },
            'edificio z2': { map: 'images/edificioz2.jpg', real: 'images/Realedificioz2.jpg' },
            'cafeteria': { map: 'images/cafeteria.jpg', real: 'images/Realcafeteria.jpg' },
            'cafeterias edificio T': { map: 'images/cafeteriat.jpg', real: 'images/Realcafeteriat.jpg' },
            'zonadelglobo': { map: 'images/globo.jpg', real: 'images/Realglobo.jpg' },
            'sanitarios': { map: 'images/sanitarios.jpg', real: 'images/Realsanitarios.jpg' },
            'baños': { map: 'images/sanitarios.jpg', real: 'images/Realsanitarios.jpg' },
            'papeleria': { map: 'images/papelerias.jpg', real: 'images/Realpapelerias.jpg' },
            'papeleria edificio u tienda': { map: 'images/papeleriau.jpg', real: 'images/Realpapeleriau.jpg' },
            'embudos': { map: 'images/controlescolar.jpg', real: 'images/Realembudos.jpg' },
            'control escolar': { map: 'images/controlescolar.jpg', real: 'images/Realcontrolescolar.jpg' },
            'servicios medicos': { map: 'images/medicos.jpg', real: 'images/Realmedicos.jpg' },
            'servicios generales': { map: 'images/generales.jpg', real: 'images/Realgenerales.jpg' },
            'jardines explanadas': { map: 'images/jardinesexplanadas.jpg', real: 'images/Realjardinesexplanadas.jpg' },
            'estacionamiento': { map: 'images/estactionamiento.jpg', real: 'images/Realestacionamiento.jpg' },
            'ingenierias': { map: 'images/ingenierias.jpg', real: 'images/Realingenierias.jpg' }
        };


        let showingRealImages = false;

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const matches = Object.entries(locationData)
                .filter(([key]) => key.includes(searchTerm));
            
            if (matches.length > 0) {
                changeMap(matches[0][1]);
            }
        });
        let currentSector = null;
        document.getElementById('toggle-real-images').addEventListener('click', () => {
            showingRealImages = !showingRealImages;
            const button = document.getElementById('toggle-real-images');
            button.textContent = showingRealImages ? '🗺️ Ver Mapa' : '🏫 Ver en Cucei';
            
            const container = document.getElementById('phone-container');
            if (showingRealImages) {
                container.classList.add('expanded');
            } else {
                container.classList.remove('expanded');
            }
            
            const mainMap = document.getElementById('main-map');
            if (mainMap.style.display !== 'none') {
                const currentImage = mainMap.src;
                const key = Object.keys(locationData).find(k => 
                    locationData[k].map === currentImage || locationData[k].real === currentImage
                );
                if (key) {
                    changeMap(locationData[key]);
                }
            }
        });

        function changeMap(image) {
            const mainMap = document.getElementById('main-map');
            if (typeof image === 'string') {
                mainMap.src = image;
            } else {
                mainMap.src = showingRealImages ? image.real : image.map;
            }
            mainMap.style.display = 'block';
            document.getElementById('google-map').style.display = 'none';

            setTimeout(() => {
                const containerWidth = mainMap.offsetWidth;
                const containerHeight = mainMap.offsetHeight;
                const imgRatio = mainMap.naturalWidth / mainMap.naturalHeight;
                const containerRatio = containerWidth / containerHeight;

                if (imgRatio > containerRatio) {
                    mainMap.style.width = '100%';
                    mainMap.style.height = 'auto';
                } else {
                    mainMap.style.width = 'auto';
                    mainMap.style.height = '100%';
                }
            }, 100);
        }
        function toggleSectorButtons() {
            const sectorButtons = document.getElementById('sector-buttons');
            const mainButtons = document.querySelectorAll('.buttons-container .main-button');
            
            if (sectorButtons.style.display === 'none') {
                sectorButtons.style.display = 'flex';
                mainButtons.forEach(btn => {
                    if (btn !== event.target) btn.style.display = 'none';
                });
            } else {
                sectorButtons.style.display = 'none';
                mainButtons.forEach(btn => btn.style.display = 'block');
            }
        }

        function toggleSector(sector) {
            const sector1Buttons = document.getElementById('sector1-buttons');
            const sector2Buttons = document.getElementById('sector2-buttons');
            
            if (currentSector === sector) {
                document.getElementById(`${sector}-buttons`).style.display = 'none';
                currentSector = null;
            } else {
                sector1Buttons.style.display = sector === 'sector1' ? 'block' : 'none';
                sector2Buttons.style.display = sector === 'sector2' ? 'block' : 'none';
                currentSector = sector;
            }
        }
        const navigationState = {
            currentPosition: { x: 0, y: 0, z: 0 },
            imageHistory: [],
            maxHistoryLength: 50
        };

        const images = {
            right: [
                'images/derecha1.jpg',
                'images/derecha2.jpg',
                'images/derecha3.jpg',
                'images/derecha4.jpg',
                'images/derecha5.jpg',
                'images/derecha6.jpg',
                'images/derecha7.jpg',
                'images/derecha8.jpg',
                'images/derecha9.jpg',
                'images/derecha10.jpg',
                'images/derecha11.jpg',
                'images/derecha12.jpg',
            ],
            left: [
                'images/izquierda1.jpg',
                'images/izquierda2.jpg',
            ],
            up: [
                'images/adelante1.jpg',
                'images/adelante2.jpg',
                'images/adelante3.jpg',
            ],
            down: [
                'images/atras1.jpg',
                'images/atras2.jpg',
                'images/atras3.jpg',
            ],
        };

        const currentIndices = {
            right: 0,
            left: 0,
            up: 0,
            down: 0,
        };

        let horizontalOffset = 0;
        let verticalOffset = 0;

        const changeImage = (direction) => {
            const mainMap = document.getElementById('main-map');
            
            // Guardar estado actual
            navigationState.imageHistory.push({
                image: mainMap.src,
                indices: {...currentIndices},
                offsets: {horizontal: horizontalOffset, vertical: verticalOffset}
            });

            if (navigationState.imageHistory.length > navigationState.maxHistoryLength) {
                navigationState.imageHistory.shift();
            }

            switch(direction) {
                case 'right':
                    if (currentIndices.left > 0) {
                        currentIndices.left--;
                        mainMap.src = images.left[currentIndices.left];
                    } else {
                        mainMap.src = images.right[horizontalOffset];
                        horizontalOffset = (horizontalOffset + 1) % images.right.length;
                    }
                    break;

                case 'left':
                    if (horizontalOffset > 0) {
                        horizontalOffset--;
                        mainMap.src = images.right[horizontalOffset];
                    } else {
                        mainMap.src = images.left[currentIndices.left];
                        currentIndices.left = (currentIndices.left + 1) % images.left.length;
                    }
                    break;

                case 'up':
                    if (currentIndices.down > 0) {
                        currentIndices.down--;
                        mainMap.src = images.down[currentIndices.down];
                    } else {
                        mainMap.src = images.up[verticalOffset];
                        verticalOffset = (verticalOffset + 1) % images.up.length;
                    }
                    break;

                case 'down':
                    if (verticalOffset > 0) {
                        verticalOffset--;
                        mainMap.src = images.up[verticalOffset];
                    } else {
                        mainMap.src = images.down[currentIndices.down];
                        currentIndices.down = (currentIndices.down + 1) % images.down.length;
                    }
                    break;
            }

            mainMap.style.transition = 'transform 0.3s ease';
            mainMap.style.transform = 'scale(1.02)';
            setTimeout(() => {
                mainMap.style.transform = 'scale(1)';
            }, 300);
        };

        document.getElementById('right').addEventListener('click', () => changeImage('right'));
        document.getElementById('left').addEventListener('click', () => changeImage('left'));
        document.getElementById('up').addEventListener('click', () => changeImage('up'));
        document.getElementById('down').addEventListener('click', () => changeImage('down'));

        const boulevardButton = document.getElementById('boulevard-button');
        const controlContainer = document.getElementById('control-container');
        const plusButton = controlContainer.querySelector('.plus');

        const showControl = () => {
            controlContainer.style.display = 'flex';
        };

        const toggleDirectionButtons = () => {
            const directionButtons = document.querySelectorAll('.direction-button');
            const buttonsVisible = Array.from(directionButtons).some(button => 
                button.style.display === 'flex' || button.style.display === '');
            
            directionButtons.forEach(button => {
                button.style.display = buttonsVisible ? 'none' : 'flex';
            });
        };

        boulevardButton?.addEventListener('click', showControl);
        plusButton?.addEventListener('click', toggleDirectionButtons);

        let showingParts = false;
        let showingInteractiveMap = false;
        let showingZonesOfInterest = false;

        function showParts() {
            const partsButtons = document.getElementById('parts-buttons');
            const otherButtons = document.querySelectorAll('.buttons-container button:not(:first-child)');
            
            if (showingParts) {
                partsButtons.style.display = 'none';
                otherButtons.forEach(button => button.style.display = 'block');
            } else {
                partsButtons.style.display = 'block';
                otherButtons.forEach(button => button.style.display = 'none');
            }
            showingParts = !showingParts;
        }

        function showZonesOfInterest() {
            const zonesButtons = document.getElementById('zones-buttons');
            const otherButtons = document.querySelectorAll('.buttons-container button:not(:nth-child(2))');

            if (showingZonesOfInterest) {
                zonesButtons.style.display = 'none';
                otherButtons.forEach(button => button.style.display = 'block');
            } else {
                zonesButtons.style.display = 'block';
                otherButtons.forEach(button => button.style.display = 'none');
            }
            showingZonesOfInterest = !showingZonesOfInterest;
        }

        
        function showInteractiveMap() {
            const interactiveMap = document.getElementById('interactive-map');
            const mainButtons = document.querySelectorAll('.buttons-container .main-button');
            
            if (showingInteractiveMap) {
                interactiveMap.style.display = 'none';
                mainButtons.forEach(btn => btn.style.display = 'block');
            } else {
                interactiveMap.style.display = 'block';
                mainButtons.forEach(btn => {
                    if (btn !== event.target) btn.style.display = 'none';
                });
            }
            showingInteractiveMap = !showingInteractiveMap;
        }
        function showDoorControl(door) {
            const controlContainer = document.getElementById('control-container');
            changeMap(`images/${door}.jpg`);
            controlContainer.style.display = 'block';
            
            const mapContainer = document.querySelector('.map-container');
            const mapRect = mapContainer.getBoundingClientRect();
            
            controlContainer.style.position = 'absolute';
            controlContainer.style.left = `${mapRect.right + 10}px`;
            controlContainer.style.top = `${mapRect.top}px`;
        }


        function changeMap(image) {
            const mainMap = document.getElementById('main-map');
            if (typeof image === 'string') {
                mainMap.src = image;
            } else {
                mainMap.src = showingRealImages ? image.real : image.map;
            }
            mainMap.style.display = 'block';
            document.getElementById('google-map').style.display = 'none';
        }

        function showGoogleMaps() {
            var iframe = document.getElementById('google-map');
            iframe.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1866.6716221012316!2d-103.32547288095878!3d20.65561000000002!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1723669773976!5m2!1ses-419!2smx";
            iframe.style.display = 'block';
            document.getElementById('main-map').style.display = 'none';
            document.getElementById('parts-buttons').style.display = 'none';
            document.getElementById('interactive-map-buttons').style.display = 'none';
            document.getElementById('doors-buttons').style.display = 'none';
        }

        function showMainMap() {
            document.getElementById('main-map').src = 'images/mapa-udg.jpg';
            document.getElementById('main-map').style.display = 'block';
            document.getElementById('google-map').style.display = 'none';
            document.getElementById('parts-buttons').style.display = 'none';
            document.getElementById('interactive-map-buttons').style.display = 'none';
            document.getElementById('doors-buttons').style.display = 'none';
        }
        document.querySelectorAll('.btn-brillante').forEach(button => {
            const originalOnclick = button.getAttribute('onclick');
            const match = originalOnclick.match(/'([^']+)'/);
            if (match) {
                const imagePath = match[1];
                const key = Object.keys(locationData).find(k => locationData[k].map === imagePath);
                if (key) {
                    button.onclick = () => changeMap(locationData[key]);
                }
            }
        });