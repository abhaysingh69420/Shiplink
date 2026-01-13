import { ArrowLeft, CreditCard, Plus, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface PaymentMethodsProps {
  onNavigate: (screen: Screen) => void;
}

interface PaymentCard {
  id: number;
  type: 'visa' | 'mastercard' | 'amex';
  lastFour: string;
  expiryDate: string;
  isDefault: boolean;
}

export function PaymentMethods({ onNavigate }: PaymentMethodsProps) {
  const [cards, setCards] = useState<PaymentCard[]>([
    {
      id: 1,
      type: 'visa',
      lastFour: '4242',
      expiryDate: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'mastercard',
      lastFour: '8888',
      expiryDate: '08/26',
      isDefault: false
    }
  ]);

  const [showAddCard, setShowAddCard] = useState(false);
  const [addCardSuccess, setAddCardSuccess] = useState(false);
  const [cardError, setCardError] = useState('');

  const [newCard, setNewCard] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Format card number with spaces
    if (e.target.name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    
    // Format expiry date
    if (e.target.name === 'expiryDate') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
    }

    setNewCard({
      ...newCard,
      [e.target.name]: value
    });
    setCardError('');
  };

  const handleAddCard = () => {
    if (!newCard.cardNumber || !newCard.expiryDate || !newCard.cvv || !newCard.cardholderName) {
      setCardError('Please fill in all fields');
      return;
    }

    // Validate card number (basic check)
    const cardDigits = newCard.cardNumber.replace(/\s/g, '');
    if (cardDigits.length !== 16) {
      setCardError('Invalid card number');
      return;
    }

    // Determine card type
    let cardType: 'visa' | 'mastercard' | 'amex' = 'visa';
    if (cardDigits.startsWith('5')) {
      cardType = 'mastercard';
    } else if (cardDigits.startsWith('34') || cardDigits.startsWith('37')) {
      cardType = 'amex';
    }

    // Add new card
    const newCardObj: PaymentCard = {
      id: cards.length + 1,
      type: cardType,
      lastFour: cardDigits.slice(-4),
      expiryDate: newCard.expiryDate,
      isDefault: cards.length === 0
    };

    setCards([...cards, newCardObj]);
    setNewCard({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    });
    setAddCardSuccess(true);
    
    setTimeout(() => {
      setAddCardSuccess(false);
      setShowAddCard(false);
    }, 2000);
  };

  const handleSetDefault = (id: number) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === id
    })));
  };

  const handleDeleteCard = (id: number) => {
    const cardToDelete = cards.find(c => c.id === id);
    if (cardToDelete?.isDefault && cards.length > 1) {
      // Set another card as default before deleting
      const remainingCards = cards.filter(c => c.id !== id);
      setCards(remainingCards.map((card, index) => ({
        ...card,
        isDefault: index === 0
      })));
    } else {
      setCards(cards.filter(card => card.id !== id));
    }
  };

  const getCardIcon = (type: string) => {
    const colors = {
      visa: 'from-[#1A1F71] to-[#0066B2]',
      mastercard: 'from-[#EB001B] to-[#F79E1B]',
      amex: 'from-[#006FCF] to-[#00ADE6]'
    };
    return colors[type as keyof typeof colors] || colors.visa;
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => onNavigate('profile')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            Payment Methods
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Success Message */}
        {addCardSuccess && (
          <div className="mb-4 p-3 bg-[#27AE60] bg-opacity-10 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#27AE60]" />
            <p className="text-sm text-[#27AE60] font-medium">Card added successfully!</p>
          </div>
        )}

        {/* Saved Cards */}
        <div className="mb-4">
          <h3 className="text-sm text-[#121212] opacity-60 mb-3 px-2 font-semibold">
            Saved Cards
          </h3>
          
          {cards.length === 0 ? (
            <div className="bg-white rounded-[24px] p-8 text-center" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">No payment methods added yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-[24px] p-4 relative"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
                >
                  {card.isDefault && (
                    <div className="absolute top-3 right-3 bg-[#27AE60] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Default
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCardIcon(card.type)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-[16px] font-semibold text-[#121212] capitalize">
                          {card.type}
                        </p>
                        <span className="text-sm text-gray-500">•••• {card.lastFour}</span>
                      </div>
                      <p className="text-xs text-gray-400">Expires {card.expiryDate}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {!card.isDefault && (
                        <button
                          onClick={() => handleSetDefault(card.id)}
                          className="text-xs text-[#008080] font-medium hover:underline"
                        >
                          Set Default
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteCard(card.id)}
                        className="text-xs text-red-500 hover:underline flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add New Card Button */}
        {!showAddCard && (
          <button
            onClick={() => setShowAddCard(true)}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-dashed border-[#008080] rounded-[24px] p-4 hover:bg-[#008080] hover:bg-opacity-5 transition-all"
          >
            <Plus className="w-5 h-5 text-[#008080]" />
            <span className="text-[#008080] font-semibold">Add New Card</span>
          </button>
        )}

        {/* Add Card Form */}
        {showAddCard && (
          <div className="bg-white rounded-[24px] p-5" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
            <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Add New Card</h3>

            {cardError && (
              <div className="mb-4 p-3 bg-red-50 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-sm text-red-500">{cardError}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={newCard.cardholderName}
                  onChange={handleCardChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1.5">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={newCard.cardNumber}
                  onChange={handleCardChange}
                  maxLength={19}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={newCard.expiryDate}
                    onChange={handleCardChange}
                    maxLength={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={newCard.cvv}
                    onChange={handleCardChange}
                    maxLength={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setShowAddCard(false);
                    setCardError('');
                    setNewCard({
                      cardNumber: '',
                      expiryDate: '',
                      cvv: '',
                      cardholderName: ''
                    });
                  }}
                  className="flex-1 py-3 border border-gray-200 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCard}
                  className="flex-1 py-3 bg-[#008080] text-white rounded-xl font-semibold hover:bg-[#006666] transition-colors"
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Security Note */}
        <div className="mt-4 bg-[rgba(0,128,128,0.5)] bg-opacity-5 border border-[#008080] border-opacity-20 rounded-xl p-4">
          <p className="text-xs text-[#008080] leading-relaxed">
            🔒 Your payment information is encrypted and secure. We never store your full card details.
          </p>
        </div>
      </div>
    </div>
  );
}
