// Shared options for special slots
const specialSlotOptions = [
    {value: "UUUUUUUUUUUUUU", text: "Format:1: UUUUUUUUUUUUUU"},
    {value: "FFFFFFFFFFFFFF", text: "Format:2: FFFFFFFFFFFFFF"},
    {value: "DDDDDDDDDDDDDF", text: "Format:3: DDDDDDDDDDDDDF"},
    {value: "DDDDDDDDDDDDFF", text: "Format:4: DDDDDDDDDDDDFF"},
    {value: "DDDDDDDDDDDFFF", text: "Format:5: DDDDDDDDDDDFFF"},
    {value: "DDDDDDDDDDFFFF", text: "Format:6: DDDDDDDDDDFFFF"},
    {value: "DDDDDDDDDFFFFF", text: "Format:7: DDDDDDDDDFFFFF"},
    {value: "FFFFFFFFFFFFFU", text: "Format:8: FFFFFFFFFFFFFU"},
    {value: "FFFFFFFFFFFFUU", text: "Format:9: FFFFFFFFFFFFUU"},
    {value: "FUUUUUUUUUUUUU", text: "Format:10: FUUUUUUUUUUUUU"},
    {value: "FFUUUUUUUUUUUU", text: "Format:11: FFUUUUUUUUUUUU"},
    {value: "FFFUUUUUUUUUUU", text: "Format:12: FFFUUUUUUUUUUU"},
    {value: "FFFFUUUUUUUUUU", text: "Format:13: FFFFUUUUUUUUUU"},
    {value: "FFFFFUUUUUUUUU", text: "Format:14: FFFFFUUUUUUUUU"},
    {value: "FFFFFFUUUUUUUU", text: "Format:15: FFFFFFUUUUUUUU"},
    {value: "DFFFFFFFFFFFFF", text: "Format:16: DFFFFFFFFFFFFF"},
    {value: "DDFFFFFFFFFFFF", text: "Format:17: DDFFFFFFFFFFFF"},
    {value: "DDDFFFFFFFFFFF", text: "Format:18: DDDFFFFFFFFFFF"},
    {value: "DFFFFFFFFFFFFU", text: "Format:19: DFFFFFFFFFFFFU"},
    {value: "DDFFFFFFFFFFFU", text: "Format:20: DDFFFFFFFFFFFU"},
    {value: "DDDFFFFFFFFFFU", text: "Format:21: DDDFFFFFFFFFFU"},
    {value: "DFFFFFFFFFFFUU", text: "Format:22: DFFFFFFFFFFFUU"},
    {value: "DDFFFFFFFFFFUU", text: "Format:23: DDFFFFFFFFFFUU"},
    {value: "DDDFFFFFFFFFUU", text: "Format:24: DDDFFFFFFFFFUU"},
    {value: "DFFFFFFFFFFUUU", text: "Format:25: DFFFFFFFFFFUUU"},
    {value: "DDFFFFFFFFFUUU", text: "Format:26: DDFFFFFFFFFUUU"},
    {value: "DDDFFFFFFFFUUU", text: "Format:27: DDDFFFFFFFFUUU"},
    {value: "DDDDDDDDDDDDFU", text: "Format:28: DDDDDDDDDDDDFU"},
    {value: "DDDDDDDDDDDFFU", text: "Format:29: DDDDDDDDDDDFFU"},
    {value: "DDDDDDDDDDFFFU", text: "Format:30: DDDDDDDDDDFFFU"},
    {value: "DDDDDDDDDDDFUU", text: "Format:31: DDDDDDDDDDDFUU"},
    {value: "DDDDDDDDDDFFUU", text: "Format:32: DDDDDDDDDDFFUU"},
    {value: "DDDDDDDDDFFFUU", text: "Format:33: DDDDDDDDDFFFUU"},
    {value: "DFUUUUUUUUUUUU", text: "Format:34: DFUUUUUUUUUUUU"},
    {value: "DDFUUUUUUUUUUU", text: "Format:35: DDFUUUUUUUUUUU"},
    {value: "DDDFUUUUUUUUUU", text: "Format:36: DDDFUUUUUUUUUU"},
    {value: "DFFUUUUUUUUUUU", text: "Format:37: DFFUUUUUUUUUUU"},
    {value: "DDFFUUUUUUUUUU", text: "Format:38: DDFFUUUUUUUUUU"},
    {value: "DDDFFUUUUUUUUU", text: "Format:39: DDDFFUUUUUUUUU"},
    {value: "DFFFUUUUUUUUUU", text: "Format:40: DFFFUUUUUUUUUU"},
    {value: "DDFFFUUUUUUUUU", text: "Format:41: DDFFFUUUUUUUUU"},
    {value: "DDDFFFUUUUUUUU", text: "Format:42: DDDFFFUUUUUUUU"},
    {value: "DDDDDDDDDFFFFU", text: "Format:43: DDDDDDDDDFFFFU"},
    {value: "DDDDDDFFFFFFUU", text: "Format:44: DDDDDDFFFFFFUU"},
    {value: "DDDDDDFFUUUUUU", text: "Format:45: DDDDDDFFUUUUUU"},
    {value: "DDDDDFUDDDDDFU", text: "Format:46: DDDDDFUDDDDDFU"},
    {value: "DDFUUUUDDFUUUU", text: "Format:47: DDFUUUUDDFUUUU"},
    {value: "DFUUUUUDFUUUUU", text: "Format:48: DFUUUUUDFUUUUU"},
    {value: "DDDDFFUDDDDFFU", text: "Format:49: DDDDFFUDDDDFFU"},
    {value: "DDFFUUUDDFFUUU", text: "Format:50: DDFFUUUDDFFUUU"},
    {value: "DFFUUUUDFFUUUU", text: "Format:51: DFFUUUUDFFUUUU"},
    {value: "DFFFFFUDFFFFFU", text: "Format:52: DFFFFFUDFFFFFU"},
    {value: "DDFFFFUDDFFFFU", text: "Format:53: DDFFFFUDDFFFFU"},
    {value: "FFFFFFFDDDDDDD", text: "Format:54: FFFFFFFDDDDDDD"},
    {value: "DDFFFUUUDDDDDD", text: "Format:55: DDFFFUUUDDDDDD"}
];

// Add this near the specialSlotOptions
const tddSlotOptions = [
    {value: "DDDSUUDSUU", text: "SEMI-SYNC TDD1 (JP): DDDSUU DSUU"},
    {value: "DDSUUUDSUU", text: "SEMI-SYNC TDD2 (JP): DDSUUU DSUU"},
    {value: "DSUUUUDSUU", text: "SEMI-SYNC TDD3 (JP): DSUUUU DSUU"},
    {value: "DDSUUUDDDD", text: "SYNC TDD (JP): DDDSUU DDDD"},
    {value: "DDDSU", text: "DDDSU"},
    {value: "DDDDDDDSUU", text: "DDDDDDDSUU"},
    {value: "DDDSUUDDDD", text: "DDDSUU DDDD"},
    {value: "DSUUU", text: "DSUUU"}
];

// Update the initSpecialSlotSelects function to also initialize TDD select
function initSelectElements() {
    // Initialize TDD select
    const tddSelect = document.getElementById('tddSelect');
    tddSlotOptions.forEach(option => {
        const optElement = document.createElement('option');
        optElement.value = option.value;
        optElement.textContent = option.text;
        tddSelect.appendChild(optElement);
    });

    // Initialize special slot selects (existing code)
    const selects = document.querySelectorAll('.special-slot-select');
    selects.forEach(select => {
        while (select.options.length > 1) {
            select.remove(1);
        }
        
        specialSlotOptions.forEach(option => {
            const optElement = document.createElement('option');
            optElement.value = option.value;
            optElement.textContent = option.text;
            select.appendChild(optElement);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSelectElements(); 
    
    const tddInput = document.getElementById('tdd');
    const tddSelect = document.getElementById('tddSelect');
    const special1Input = document.getElementById('special1');
    const special2Input = document.getElementById('special2');
    const special1Select = document.getElementById('special1Select');
    const special2Select = document.getElementById('special2Select');
    const tddCounter = document.getElementById('tddCounter');
    const special1Counter = document.getElementById('special1Counter');
    const special2Counter = document.getElementById('special2Counter');
    const resultRSD = document.getElementById('resultRSD');
    const resultRSU = document.getElementById('resultRSU');

    // Function to update URL with current values
    function updateURL() {
        const params = new URLSearchParams();
        
        if (tddInput.value) params.set('tdd', tddInput.value);
        if (special1Input.value) params.set('s1', special1Input.value);
        if (special2Input.value) params.set('s2', special2Input.value);
        if (tddSelect.value) params.set('tddSelect', tddSelect.value);
        if (special1Select.value) params.set('s1Select', special1Select.value);
        if (special2Select.value) params.set('s2Select', special2Select.value);
        
        const newUrl = window.location.pathname + '?' + params.toString();
        window.history.pushState({ path: newUrl }, '', newUrl);
    }

    // Function to load values from URL
    function loadFromURL() {
        const params = new URLSearchParams(window.location.search);
        
        if (params.has('tdd')) {
            tddInput.value = params.get('tdd');
            updateCounter(tddInput, tddCounter);
            updateTDD();
        }
        
        if (params.has('tddSelect')) {
            tddSelect.value = params.get('tddSelect');
            if (tddSelect.value) {
                tddInput.value = tddSelect.value;
                updateCounter(tddInput, tddCounter);
                updateTDD();
            }
        }
        
        if (params.has('s1')) {
            special1Input.value = params.get('s1');
            updateCounter(special1Input, special1Counter);
        }
        
        if (params.has('s1Select')) {
            special1Select.value = params.get('s1Select');
            if (special1Select.value) {
                special1Input.value = special1Select.value;
                updateCounter(special1Input, special1Counter);
            }
        }
        
        if (params.has('s2')) {
            special2Input.value = params.get('s2');
            updateCounter(special2Input, special2Counter);
        }
        
        if (params.has('s2Select')) {
            special2Select.value = params.get('s2Select');
            if (special2Select.value) {
                special2Input.value = special2Select.value;
                updateCounter(special2Input, special2Counter);
            }
        }
        
        calculate();
    }

    // Load values from URL when page loads
    loadFromURL();

    // TDD Slot handlers
    tddInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^DSU]/gi, '').toUpperCase();
        tddSelect.value = '';
        updateCounter(this, tddCounter);
        updateTDD();
        updateURL(); // Add this line
    });
    
    tddSelect.addEventListener('change', function(e) {
        if (this.value) {
            tddInput.value = this.value;
            updateCounter(tddInput, tddCounter);
            updateTDD();
            updateURL(); // Add this line
        }
    });

    // Special Slot 1 handlers
    special1Input.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^DFU]/gi, '').toUpperCase();
        special1Select.value = '';
        updateCounter(this, special1Counter);
        calculate();
        updateURL(); // Add this line
    });
    
    special1Select.addEventListener('change', function(e) {
        if (this.value) {
            special1Input.value = this.value;
            updateCounter(special1Input, special1Counter);
            calculate();
            updateURL(); // Add this line
        }
    });

    // Special Slot 2 handlers
    special2Input.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^DFU]/gi, '').toUpperCase();
        special2Select.value = '';
        updateCounter(this, special2Counter);
        calculate();
        updateURL(); // Add this line
    });
    
    special2Select.addEventListener('change', function(e) {
        if (this.value) {
            special2Input.value = this.value;
            updateCounter(special2Input, special2Counter);
            calculate();
            updateURL(); // Add this line
        }
    });

    function updateCounter(input, counter) {
        counter.textContent = `(${input.value.length}/${input.maxLength})`;
    }

    function updateTDD() {
        const val = tddInput.value;
        updateCounter(tddInput, tddCounter);
        const sCount = (val.match(/S/g) || []).length;
        
        special1Input.disabled = special1Select.disabled = sCount < 1;
        special2Input.disabled = special2Select.disabled = sCount < 2;
        
        if (sCount < 1) {
            special1Input.value = '';
            special1Select.value = '';
            updateCounter(special1Input, special1Counter);
        }
        if (sCount < 2) {
            special2Input.value = '';
            special2Select.value = '';
            updateCounter(special2Input, special2Counter);
        }
        
        calculate();
    }

    function calculate() {
        const tddVal = tddInput.value;
        if (!tddVal) {
            resultRSD.textContent = '0';
            resultRSU.textContent = '0';
            return;
        }

        let ssd1 = 0, ssu1 = 0, ssd2 = 0, ssu2 = 0;

        if (!special1Input.disabled) {
            const s1Val = special1Input.value;
            ssd1 = (s1Val.match(/D/g) || []).length;
            ssu1 = (s1Val.match(/U/g) || []).length;
            updateCounter(special1Input, special1Counter);
        }
        if (!special2Input.disabled) {
            const s2Val = special2Input.value;
            ssd2 = (s2Val.match(/D/g) || []).length;
            ssu2 = (s2Val.match(/U/g) || []).length;
            updateCounter(special2Input, special2Counter);
        }

        const rssd = (ssd1/14) + (ssd2/14);
        const rssu = (ssu1/14) + (ssu2/14);
        const sd = (tddVal.match(/D/g) || []).length;
        const su = (tddVal.match(/U/g) || []).length;
        
        const final_rsd = (sd + rssd) / tddVal.length;
        const final_rsu = (su + rssu) / tddVal.length;
        
        resultRSD.textContent = final_rsd.toFixed(16);
        resultRSU.textContent = final_rsu.toFixed(16);
    }
});
