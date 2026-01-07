// Phone number validation by country
export const validatePhoneByCountry = (phone: string, country: string): { valid: boolean; error?: string } => {
  if (!phone || !phone.trim()) {
    return { valid: false, error: 'Phone number is required' };
  }

  // Remove all non-digit characters for validation
  const digits = phone.replace(/\D/g, '');
  
  // Basic format check - only allow digits, spaces, hyphens, plus, parentheses
  if (!/^[\d\s\-\+\(\)]+$/.test(phone)) {
    return { valid: false, error: 'Phone number can only contain digits, spaces, hyphens, plus, and parentheses' };
  }

  // Country-specific validation
  const countryRules: { [key: string]: { min: number; max: number; pattern?: RegExp } } = {
    'United States': { min: 10, max: 10, pattern: /^1?[2-9]\d{2}[2-9]\d{2}\d{4}$/ },
    'United Kingdom': { min: 10, max: 11, pattern: /^(\+44|0)?[1-9]\d{8,9}$/ },
    'Egypt': { min: 10, max: 11, pattern: /^(\+20|0)?1[0-2]\d{8}$/ },
    'Canada': { min: 10, max: 10, pattern: /^1?[2-9]\d{2}[2-9]\d{2}\d{4}$/ },
    'Australia': { min: 9, max: 10, pattern: /^(\+61|0)?[2-9]\d{8}$/ },
    'Germany': { min: 10, max: 12, pattern: /^(\+49|0)?[1-9]\d{6,10}$/ },
    'France': { min: 9, max: 10, pattern: /^(\+33|0)?[1-9]\d{8}$/ },
    'Spain': { min: 9, max: 9, pattern: /^(\+34|0)?[6-9]\d{8}$/ },
    'Italy': { min: 9, max: 10, pattern: /^(\+39|0)?[3-9]\d{8,9}$/ },
    'Netherlands': { min: 9, max: 9, pattern: /^(\+31|0)?[6-9]\d{8}$/ },
    'Belgium': { min: 9, max: 9, pattern: /^(\+32|0)?[1-9]\d{8}$/ },
    'Switzerland': { min: 9, max: 9, pattern: /^(\+41|0)?[1-9]\d{8}$/ },
    'Sweden': { min: 9, max: 9, pattern: /^(\+46|0)?[1-9]\d{8}$/ },
    'Norway': { min: 8, max: 8, pattern: /^(\+47|0)?[2-9]\d{7}$/ },
    'Denmark': { min: 8, max: 8, pattern: /^(\+45|0)?[2-9]\d{7}$/ },
    'Poland': { min: 9, max: 9, pattern: /^(\+48|0)?[1-9]\d{8}$/ },
    'United Arab Emirates': { min: 9, max: 9, pattern: /^(\+971|0)?[2-9]\d{8}$/ },
    'Saudi Arabia': { min: 9, max: 9, pattern: /^(\+966|0)?[1-9]\d{8}$/ },
    'Kuwait': { min: 8, max: 8, pattern: /^(\+965|0)?[2-9]\d{7}$/ },
    'Qatar': { min: 8, max: 8, pattern: /^(\+974|0)?[2-9]\d{7}$/ },
    'Bahrain': { min: 8, max: 8, pattern: /^(\+973|0)?[1-9]\d{7}$/ },
    'Oman': { min: 8, max: 8, pattern: /^(\+968|0)?[2-9]\d{7}$/ },
    'Jordan': { min: 9, max: 9, pattern: /^(\+962|0)?[2-9]\d{8}$/ },
    'Lebanon': { min: 8, max: 8, pattern: /^(\+961|0)?[3-9]\d{7}$/ },
    'Morocco': { min: 9, max: 9, pattern: /^(\+212|0)?[5-9]\d{8}$/ },
    'Tunisia': { min: 8, max: 8, pattern: /^(\+216|0)?[2-9]\d{7}$/ },
    'Algeria': { min: 9, max: 9, pattern: /^(\+213|0)?[5-9]\d{8}$/ },
    'South Africa': { min: 9, max: 9, pattern: /^(\+27|0)?[1-9]\d{8}$/ },
    'Nigeria': { min: 10, max: 11, pattern: /^(\+234|0)?[1-9]\d{9,10}$/ },
    'Kenya': { min: 9, max: 9, pattern: /^(\+254|0)?[1-9]\d{8}$/ },
    'India': { min: 10, max: 10, pattern: /^(\+91|0)?[6-9]\d{9}$/ },
    'China': { min: 11, max: 11, pattern: /^(\+86|0)?1[3-9]\d{9}$/ },
    'Japan': { min: 10, max: 11, pattern: /^(\+81|0)?[1-9]\d{9,10}$/ },
    'South Korea': { min: 10, max: 11, pattern: /^(\+82|0)?1[0-9]\d{8,9}$/ },
    'Singapore': { min: 8, max: 8, pattern: /^(\+65|0)?[689]\d{7}$/ },
    'Malaysia': { min: 9, max: 10, pattern: /^(\+60|0)?[1-9]\d{8,9}$/ },
    'Indonesia': { min: 9, max: 11, pattern: /^(\+62|0)?[2-9]\d{8,10}$/ },
    'Thailand': { min: 9, max: 9, pattern: /^(\+66|0)?[2-9]\d{8}$/ },
    'Philippines': { min: 10, max: 10, pattern: /^(\+63|0)?[2-9]\d{9}$/ },
    'Vietnam': { min: 9, max: 10, pattern: /^(\+84|0)?[1-9]\d{8,9}$/ },
    'Brazil': { min: 10, max: 11, pattern: /^(\+55|0)?[1-9]\d{9,10}$/ },
    'Mexico': { min: 10, max: 10, pattern: /^(\+52|0)?[1-9]\d{9}$/ },
    'Argentina': { min: 10, max: 10, pattern: /^(\+54|0)?[1-9]\d{9}$/ },
    'Chile': { min: 9, max: 9, pattern: /^(\+56|0)?[2-9]\d{8}$/ },
    'Colombia': { min: 10, max: 10, pattern: /^(\+57|0)?[1-9]\d{9}$/ },
  };

  const rule = countryRules[country];
  
  if (rule) {
    // Check digit length
    if (digits.length < rule.min) {
      return { valid: false, error: `Phone number for ${country} must have at least ${rule.min} digits` };
    }
    if (digits.length > rule.max) {
      return { valid: false, error: `Phone number for ${country} cannot exceed ${rule.max} digits` };
    }
    
    // Pattern validation (if pattern exists)
    if (rule.pattern && !rule.pattern.test(digits)) {
      return { valid: false, error: `Invalid phone number format for ${country}` };
    }
  } else {
    // Default validation for countries not in list
    if (digits.length < 7) {
      return { valid: false, error: 'Phone number must contain at least 7 digits' };
    }
    if (digits.length > 15) {
      return { valid: false, error: 'Phone number cannot exceed 15 digits' };
    }
  }

  return { valid: true };
};
